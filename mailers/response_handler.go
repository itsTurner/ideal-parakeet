package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	cloudmailin "github.com/cloudmailin/cloudmailin-go"
)

func serveIncomingMail(firestate *FirebaseState) {
	// taskScheduler := chrono.NewDefaultTaskScheduler()
	// now := time.Now()
	// startTime := now.Add(time.Second * 1)

	http.HandleFunc("/incoming_mail", func(w http.ResponseWriter, req *http.Request) {
		handleIncomingPOST(w, req, firestate)
	})

	http.HandleFunc("/request_notification", func(w http.ResponseWriter, req *http.Request) {
		decoder := json.NewDecoder(req.Body)
		var r WebResponse
		err := decoder.Decode(&r)
		if err != nil {
			panic(err)
		}
		fmt.Println(r)
	})

	http.ListenAndServe(":3000", nil)
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
