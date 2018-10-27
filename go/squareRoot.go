package main

import (
	"fmt"
	"math"
	"os"
	"strconv"
)

func Sqrt(x float64) float64 {
	z := 1.0
	for math.Abs((z*z-x)/(2*z)) > 0.00000000001 {
		z -= ((z * z) - x) / (2 * z)
		fmt.Println(z)
	}
	return z
}

func main() {
	num, _ := strconv.ParseFloat(os.Args[1], 64)
	fmt.Println(Sqrt(num))
	fmt.Println(math.Sqrt(num))
}
