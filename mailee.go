package main

import (
	"bufio"
	"fmt"
	"log"
	"net"
	"net/mail"
)

const PORT = "2525"

func main() {
	server := createServer(PORT)

	fmt.Println("Listening on port", PORT)

	defer server.Close()

	for {
		conn, err := server.Accept()

		if err != nil {
			log.Fatalf("Error accepting: %v\n", err)
		}

		go handleConnection(conn)
	}
}

func createServer(port string) net.Listener {
	server, err := net.Listen("tcp", ":"+PORT)

	if err != nil {
		log.Fatalf("Error listening to port %s\n", PORT)
	}

	return server
}

func handleConnection(conn net.Conn) {
	defer conn.Close()

	conn.Write([]byte("220 OK\n"))

	buffer := bufio.NewReader(conn)

	for {
		str, _ := buffer.ReadString('\n')

		if str == "DATA\r\n" {
			break
		}

		conn.Write([]byte("250 OK\n"))
	}

	conn.Write([]byte("354 OK\n"))

	fmt.Println("---")

	m, err := mail.ReadMessage(buffer)
	if err != nil {
		log.Fatal(err)
	}

	header := m.Header
	fmt.Println("Date:", header.Get("Date"))
	fmt.Println("From:", header.Get("From"))
	fmt.Println("To:", header.Get("To"))
	fmt.Println("Subject:", header.Get("Subject"))

	bodyReader := m.Body
	// fmt.Println(reflect.TypeOf(bodyReader))

	// body, err := ioutil.ReadAll(bodyReader)
	// if err != nil {
	// 	log.Fatal(err)
	// }
	// fmt.Printf("%s", body)

	var body string = ""

	for {
		str, _ := bodyReader.ReadString('\n')

		if str == ".\r\n" {
			break
		}

		body = body + str
	}

	fmt.Println(body)

	conn.Write([]byte("250 OK\n"))
	conn.Write([]byte("221 OK\n"))
}
