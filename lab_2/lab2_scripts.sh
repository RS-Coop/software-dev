#!/bin/bash
# Authors : Cooper Simpson
# Date : 1/30/2019

#Problem 1 Code:


echo "Enter a filename: "
read fname
echo "Enter a regular expression: "
read reg

echo "Searching file..."
sleep 2
grep -E $reg $fname
sleep 2

echo "Hardcoded stuff..."
sleep 2


echo "Cell Phone #'s: " & grep -c -E "^[0-9]{3}-[0-9]{3}-[0-9]{4}$" regex_practice.txt
echo "Emails: " & grep -c -E ".+@.+\..{2,3}" regex_practice.txt
sleep 2
grep -E "^303-[0-9]{3}-[0-9]{4}$" regex_practice.txt > phone_results.txt
grep -E "@geocities.com" regex_practice.txt > email_results.txt
grep -E $1 regex_practice.txt > command_results.txt
