package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go/v4"
	"firebase.google.com/go/v4/auth"
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

	postContent("test@test.com", "Title", "Body", app, auth, store, ctx)
}

func postContent(email string, title string, body string, app *firebase.App, auth *auth.Client, store *firestore.Client, ctx context.Context) {
	user := getUserByEmail(email, ctx, auth)

	timestamp := time.Now().Unix()

	demodoc := Entry{
		Title:    title,
		DateTime: timestamp,
		Body:     body,
	}

	docTitle := fmt.Sprintf("%s_%d", user.UserInfo.UID, timestamp)
	_, err := store.Collection("journalEntries").Doc(docTitle).Set(ctx, demodoc)
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
