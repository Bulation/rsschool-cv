# Garipov Bulat Rishatovich

Male, 27 December 2001

+ Phone: +7 987 214 1640
+ E-mail: insanbulat@gmail.com
+ Telegram: [@Bulation](https://t.me/bulation)
+ Discord: [Bulation#0685](http://discord.com/users/222664316459941890)

Citizenship: Russia

Location: Almetyevsk, Republic Tatarstan

## About myself

I am 19 years old beginning frontend-developer, a young student, passed USE in Informatics for 92 points. I'm interesting in programming from childhood, so for many years I have been trying to develop in this sphere. Now my main purpose is productive exploring of JavaScript with RSSchool.

### Work experience: 

+ 2020-2021: Informatics USE (Unified State Exam) Mentor in online-school

## Skills

+ Basic knowledge of C++, Python, PascalABC.Net, JavaScript, SASS, Git
+ Knowledge solving methods of USE tasks and school stage of Russian Olympiad for schoolchildren

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

I have EF SET Certificate that certify me that my level of English is B1 Intermediate

[Link on certificate](https://www.efset.org/cert/FedyfJ)

## My Projects

+ [Drum-Kit](https://rolling-scopes-school.github.io/bulation-JSFEPRESCHOOL/drum-kit/): JS30 project where you can play by keys or mouse on drum or piano. Technologies that I used: HTML, CSS, JS, SVG
+ [Custom Video Player](https://rolling-scopes-school.github.io/bulation-JSFEPRESCHOOL/custom-video-player/): Custom player for museum task. Added almost all YouTube player functional. Technologies that I used: HTML, CSS, JS, SVG, BEM
+ [Museum](https://rolling-scopes-school.github.io/bulation-JSFE2021Q3/museum-dom): Adaptive landing that i made on stage0-1. Technologies that I used: HTML, SASS, SVG, BEM, JS, Webpack