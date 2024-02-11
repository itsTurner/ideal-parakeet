package main

import (
	"context"
	"fmt"
	"log"
	"net/http"

	"firebase.google.com/go/v4/auth"
	cloudmailin "github.com/cloudmailin/cloudmailin-go"
	"google.golang.org/api/iterator"
)

func serveIncomingMail(firestate *FirebaseState) {
	// taskScheduler := chrono.NewDefaultTaskScheduler()
	// now := time.Now()
	// startTime := now.Add(time.Second * 1)

	http.HandleFunc("/incoming_mail", func(w http.ResponseWriter, req *http.Request) {
		handleIncomingPOST(w, req, firestate)
	})

	http.HandleFunc("/request_notification", func(w http.ResponseWriter, req *http.Request) {
		err := allDocs(context.Background(), firestate)
		if err != nil {
			log.Fatalln(err)
		}
		// decoder := json.NewDecoder(req.Body)
		// var r WebResponse
		// err := decoder.Decode(&r)
		// if err != nil {
		// 	panic(err)
		// }
		// fmt.Println(r)
	})

	http.ListenAndServe(":3000", nil)
}

func getEmailFromUID(ctx context.Context, uid string, firestate *FirebaseState) *auth.UserRecord {
	u, err := firestate.Auth.GetUser(ctx, uid)
	if err != nil {
		log.Fatalf("error getting user %s: %v\n", uid, err)
	}
	log.Printf("Successfully fetched user data: %v\n", u)
	return u
}

func allDocs(ctx context.Context, firestate *FirebaseState) error {
	fmt.Println("All cities:")
	iter := firestate.Store.Collection("Reminders").Documents(ctx)
	for {
		doc, err := iter.Next()
		if err == iterator.Done {
			break
		}
		if err != nil {
			return err
		}
		fmt.Println(doc.Data()["userID"])
	}
	return nil
}

func sendInFuture(addr string, name string, content string, when int) {

}

func handleIncomingPOST(w http.ResponseWriter, req *http.Request, firestate *FirebaseState) {
	message, err := cloudmailin.ParseIncoming(req.Body)
	if err != nil {
		http.Error(w, "Error parsing message: "+err.Error(), http.StatusUnprocessableEntity)
		return
	}

	author := message.Envelope.From
	subject := message.Headers.Subject()
	body := message.ReplyPlain
	if body == "" {
		body = message.Plain
	}

	fmt.Printf("%s: %s\n---\n%s", author, subject, body)
	fmt.Printf("[Sending to post content...]")
	postContent(author, subject, body, firestate)

	fmt.Fprint(w, "Thanks for the message: ", message.Headers.First("message_id"))
}
