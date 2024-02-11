package main

import (
	"context"

	"cloud.google.com/go/firestore"
	firebase "firebase.google.com/go/v4"
	"firebase.google.com/go/v4/auth"
)

type FirebaseState struct {
	Context context.Context
	App     *firebase.App
	Auth    *auth.Client
	Store   *firestore.Client
}

type Entry struct {
	Title    string `firestore:"title"`
	DateTime int64  `firestore:"datetime"`
	Body     string `firestore:"body"`
}
