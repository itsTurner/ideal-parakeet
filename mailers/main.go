package main

import (
	"context"
	"fmt"
)

func main() {
	app := initializeAppWithServiceAccount()

	auth := getAuthClient(context.Background(), app)

	user := getUserByEmail("test@test.com", context.Background(), auth)

	fmt.Println(user.UserInfo.UID)
}
