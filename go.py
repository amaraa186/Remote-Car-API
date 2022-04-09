import RPi.GPIO as GPIO
import time
import sys

direction = sys.argv[1]

GPIO.setmode(GPIO.BOARD)


left_back = 38
left_front = 37
right_back = 36
right_front = 35



GPIO.setup(left_back, GPIO.OUT)
GPIO.setup(left_front, GPIO.OUT)
GPIO.setup(right_back, GPIO.OUT)
GPIO.setup(right_front, GPIO.OUT)




<<<<<<< HEAD
direction = sys.argv[1]

if direction == "f":
    print("Move Forward")

if direction == "s":
    print("Stop")

if direction == "b":
    print("Move Back")

if direction == "r":
    print("Turn Right")

if direction == "l":
    print("Turn Left")

if direction == "q":
=======


if direction == "f":
    print("Move Forward")
    GPIO.output(right_front, True)  
    GPIO.output(left_front, True)

if direction == "s":
    print("Stop")
    GPIO.output(right_front, False)  
    GPIO.output(left_front, False)
    GPIO.output(right_back, False)
    GPIO.output(left_back, False)

if direction == "b":
    print("Move Back")
    GPIO.output(right_back, False)
    GPIO.output(left_back, False)

if direction == "r":
    print("Turn Right")
    GPIO.output(right_front, False)  
    GPIO.output(left_front, True)

if direction == "l":
    print("Turn Left")
    GPIO.output(right_front, True)  
    GPIO.output(left_front, False)

if direction == "quit":
    GPIO.cleanup()
>>>>>>> a82b1c369b0f5a280288575ff415138219b578a6
    quit()