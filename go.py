# import RPi.GPIO as GPIO
# import time

# GPIO.setmode(GPIO.BOARD)


# left_back = 38
# left_front = 37
# right_back = 36
# right_front = 35

# t = 3

# GPIO.setup(left_back, GPIO.OUT)
# GPIO.setup(left_front, GPIO.OUT)
# GPIO.setup(right_back, GPIO.OUT)
# GPIO.setup(right_front, GPIO.OUT)


# GPIO.output(right_front, True)
# GPIO.output(left_front, True)
# time.sleep(t)
# GPIO.output(right_front, False)  
# GPIO.output(left_front, False)
# time.sleep(3)
# GPIO.output(right_back, True)
# GPIO.output(left_back, True)
# time.sleep(3)
# GPIO.output(right_back, False)
# GPIO.output(left_back, False)

# GPIO.cleanup()

import sys

while True:

    direction = sys.argv[1]
    print(sys.argv[0])

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
        quit()