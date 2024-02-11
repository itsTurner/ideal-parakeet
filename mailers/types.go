package main

type Entry struct {
	Title    string `firestore:"title"`
	DateTime int64  `firestore:"datetime"`
	Body     string `firestore:"body"`
}
