package main

import (
	"context"
	"fmt"
	"log"
	"time"
)

func main() {
	ctx := context.Background()

	app := initializeAppWithServiceAccount()

	auth := getAuthClient(ctx, app)

	store, err := app.Firestore(ctx)
	if err != nil {
		log.Fatalln(err)
	}
	defer store.Close()

	firestate := &FirebaseState{ctx, app, auth, store}

	serveIncomingMail(firestate)

	// postContent("test@test.com", "Title", "Body", firestate)
}

func postContent(email string, title string, body string, firestate *FirebaseState) {
	user := getUserByEmail(email, firestate.Context, firestate.Auth)

	timestamp := time.Now().Unix()

	demodoc := Entry{
		Title:    title,
		DateTime: timestamp,
		Body:     body,
	}

	docTitle := fmt.Sprintf("%s_%d", user.UserInfo.UID, timestamp)
	_, err := firestate.Store.Collection("journalEntries").Doc(docTitle).Set(firestate.Context, demodoc)
	if err != nil {
		log.Printf("An error has occurred: %s", err)
	}

	fmt.Printf("Posted journal entry %d for %s (%s)", timestamp, email, user.UserInfo.UID)
}

func testSend() {
	ctx := context.Background()

	app := initializeAppWithServiceAccount()

	auth := getAuthClient(ctx, app)

	user := getUserByEmail("test@test.com", ctx, auth)

	store, err := app.Firestore(ctx)
	if err != nil {
		log.Fatalln(err)
	}
	defer store.Close()

	demodoc := Entry{
		Title:    "Please work!",
		DateTime: time.Now().Unix(),
		Body:     "I am literally begging you",
	}

	docTitle := fmt.Sprintf("%s_%d", user.UserInfo.UID, time.Now().Unix())
	_, err = store.Collection("journalEntries").Doc(docTitle).Set(ctx, demodoc)
	if err != nil {
		log.Printf("An error has occurred: %s", err)
	}

	fmt.Println(user.UserInfo.UID)
}
