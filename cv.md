# Garipov Bulat Rishatovich
------------------------------------------
Male, 27 December 2001

+ Cell: +7 987 214 1640
+ E-mail: insanbulat@gmail.com
+ Telegram: @Bulation

Citizenship: Russia

Location: Almetyevsk, Republic Tatarstan

--

## About myself

19 years old beginning frontend-developer, young student, who can study quickly and really wants explore programming

Passed USE (Unified State Exam) in Informatics with 92 points

Purpose: finish rss course succesfully, get deep knowledge of frontend-developing and become a junior frontend-developer

Work experience: 

+ 2020-2021: Informatics USE (Unified State Exam) Mentor in online-school

## Skills

+ Basic knowledge of C++, Python, PascalABC.Net, JavaScript
+ Begin to study Git

## Code Example

My solution of 27th task on Informatic USE that was in 2020 year

Problem: You are given a sequence of N positive integers. Considered
all pairs of elements of the sequence, the difference of which is even, and in these
pairs, at least one of the numbers in the pair is divisible by 33. The order
elements in a pair are unimportant. Among all such pairs, you need to find and print a pair
with the maximum sum of elements. If the same maximum sum
has several pairs, you can print any of them. If matching pairs are
not in the sequence, you need to output two zeros.

Solution on Python: 

~~~python
L = R = nech = nechkr33 = ch = chkr33 = 0
N = int(input())
for i in range(N):
    x = int(input())
    if x % 2 == 0 and x % 33 == 0:
        if x > chkr33:
            if chkr33 > ch:
                ch = chkr33
            chkr33 = x
    elif x % 2 == 0 and x % 33 != 0:
        if x > ch:
            ch = x
    elif x % 2 != 0 and x % 33 == 0:
        if x > nechkr33:
            if nechkr33 > nech:
                nech = nechkr33
            nechkr33 = x
    elif x % 2 != 0 and x % 33 != 0:
        if x > nech:
            nech = x
if nech + nechkr33 > L + R and nech != 0 and nechkr33 != 0:
    L = nech
    R = nechkr33
if ch + chkr33 > L + R and ch != 0 and chkr33 != 0:
    L = ch
    R = chkr33
print(L, R)
~~~

## Level of English

I have EF SET Certificate that certify me tha my level of English is B1 Intermediate

[Link on certificate](https://www.efset.org/cert/FedyfJ)