# Homework_3_JS
Week 3 JavaScripts: Password Generator


## User Story
AS AN employee with access to sensitive data

I WANT to randomly generate a password that meets certain criteria

SO THAT I can create a strong password that provides greater security


## Acceptance Criteria
GIVEN I need a new, secure password

WHEN I click the button to generate a password

THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria

THEN I select which criteria to include in the password

WHEN prompted for the length of the password

THEN I choose a length of at least 8 characters and no more than 128 characters

WHEN prompted for character types to include in the password

THEN I choose lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt

THEN my input should be validated and at least one character type should be selected

WHEN all prompts are answered

THEN a password is generated that matches the selected criteria

WHEN the password is generated

THEN the password is either displayed in an alert or written to the page



## Mock Up 

<img src="Assets\03-javascript-homework-demo.png">


# Creating the Password Generator

We have been given the HTML and CSS already done. The homework is to focus on Javascript and make it generate passwords.

If we break this down, I need to:
- Create prompts for password criteria
- Add length that you can change
- Generate the password


## Generating a password

I will focus on generating the password first, will make it easier to make sure I have the first two correct when there is an actual password shown.
To start, we need to define all the variables: numbers, lower-case letters, upper-case letters and special characters. We probably need one for length too, but at the moment a bit unsure how to do the length correctly.
For now, I will add it into my var options and set length to true like the rest.

To make the characters random, I used Math.ceil and maths.random. Purely just to see the difference between ceil and floor. Clearly the wrong one to use! Changed it to floor.

To get the password to work, I put my work into the function generatePassword. Added my if statements

Tested it out on the html, and it worked!

<img src= "Images\Generating_Passwords.JPG">

It worked! The password shows a random mix of my four variables, at the length of 12! 

## Choosing Criteria
Lets work on those alert/prompt/confirm windows!
So I started off having all prompts popping up for all the questions.
Questions 
- How long would you like your password, must be between 8 and 128
- Numbers?
- Upper Case?
- Lower Case?
- Special Characters?

### Length
For length, the prompt is correct here. As you are letting the user decide the length. 
I did add a alert to say please add a value if they didn't add a value. If they chose outside of the numbers given, then it would come up with an alert asking to choose between the numbers given. 
Just confirmed on my website that this does indeed work the way I want. 

<img src="Images\Prompt to work.JPG">

<img src="Images\Prompt_noValue.JPG">


### Numbers, Upper and Lower Case and Special characters

As you will see in the image below, I created prompts for the rest of them. This isn't correct as its a true or false statement I need. 

<img src="Images\Prompt_wrong.JPG">

I changed these to confirms instead.

<img src= "Images\confirm.JPG">


By changing to confirm, they can press okay for yes they do want this included or cancel if they do not.

I also went back to my length and looking at what I need to add incase someone puts letters instead on numbers. NaN to the rescue!


## Time to clean!

Time to clean up my code, to make sure it is looking pretty and clean. 
What I realised going back through my code was that I didn't need all my code. That I could actually shorten it!
For example, instead of having two lines for Upper and Lower case, I changed my var to alphabet. Then in a string, I put the alphabet. Later on in my if statements, I could just convert them by using .toUpperCase and .toLowerCase. That was super satisfying to figure that out! 

I also got rid of my var options, as I realised I was letting the user choose if they are true or not. So there was no need to have it in the code.
Because I took my options out, I had to define my criteria. To be more descriptive with my names, I added a use in front of each criteria. So now it will read useLowerCase.

I created a new variable called passwordAlphabet, more descriptive as I am creating a new alphabet to includes both Upper and lower case letters, symbols and numbers. 

While writing out my new 'if' statements using my passwordAlphabet, I had my Symbols and Numbers referring to my vars above. Instead of adding this reference, I added the strings so it would read:

if (useNumbers)
passwordAplphabet += "1234567890"

Checked it on the HTML, it worked the same! Yay! One less line of code!

# Results

I am so happy with how the code looks! Google is quickly becoming a best friend! 
Of course, I am also happy with getting the password generator to work. WHich, I guess, at the end of the day is what is most important. But the code being clean is very important too! 

I tested the code at different lengths and with different sets of criterias, they all worked with no problems.
You are also easily able to select and copy the password too.  


<img src="Images\final.JPG">


