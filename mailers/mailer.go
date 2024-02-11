package main

import (
	"bytes"
	"fmt"
	"net/smtp"
	"os"
	"text/template"
)

// func main() {
// 	sendEmail("thebippitybops@gmail.com", "Bip bop", "Being ahgbij")
// }

func sendEmail(addr string, name string, content string) {
	// Sender data.
	from := os.Getenv("SENDER_ADDR")
	password := os.Getenv("SENDER_PASS")

	fmt.Printf("%s // %s\n", from, password)

	// Receiver email address.
	to := []string{addr}

	// smtp server configuration.
	smtpHost := "smtp.gmail.com"
	smtpPort := "587"

	// Authentication.
	auth := smtp.PlainAuth("", from, password, smtpHost)

	t, _ := template.ParseFiles("template.html")

	var body bytes.Buffer

	mimeHeaders := "MIME-version: 1.0;\nContent-Type: text/html; charset=\"UTF-8\";\n\n"
	body.Write([]byte(fmt.Sprintf("Cc: c46409d075fa6947dd94@cloudmailin.net \nSubject: Hello icon! \n%s\n\n", mimeHeaders)))

	t.Execute(&body, struct {
		Name    string
		Message string
	}{
		Name:    name,
		Message: content,
	})

	// Sending email.
	err := smtp.SendMail(smtpHost+":"+smtpPort, auth, from, to, body.Bytes())
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println("Email Sent!")
}
