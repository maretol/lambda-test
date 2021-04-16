package main

import (
	"context"
	"fmt"
	"os"

	"github.com/aws/aws-lambda-go/lambda"
)

func HandleRequest(ctx context.Context) (string, error) {
	if os.Getenv("MODE") == "ERROR" {
		return "Hello Error!", fmt.Errorf("Error!!")
	}
	return "Hello World!", nil
}

func main() {
	lambda.Start(HandleRequest)
}
