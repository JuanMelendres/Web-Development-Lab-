package main

import (
	"syscall/js"
)

func main() {
	js.Global().Call("alert", "Hello World, Juan")
}
