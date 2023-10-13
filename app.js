// Exercise 1 & 3 Section
/* for(let i = 0; i < 100; i++)
{
    if(i % 2 == 0)
    {
        continue;
    }
    else
    {
        console.log(i);
    }
} */

/*  let i = 1;

while(i < 100)
{
    if(i % 2 != 0)
    {
        console.log(i);
    }
    i++;
} */

/* do
{
    if(i % 2 != 0)
    {
        console.log(i);
    }
    i++;
    
}   while(i < 100); */

// Exercise 2 & 3 Section
/* let answer = "";
for(let j = 0; j <  100; j++)
{ console.log(j);
    if(j % 3 == 0)
    {
        answer = "Fizz";
    }
    if(j % 5 == 0)
    {
        answer += "Buzz";
    }
console.log(answer);
} */

let j = 1;

/* while(j <= 100)
{
    let answer = "";

    if(j % 3 == 0)
    {
        answer = "Fizz";
    }
    if(j % 5 == 0)
    {
        answer += "Buzz";
    }

    console.log(`${j} ${answer}`);

    j++;
} */

/* do
{
    let answer = "";

    if(j % 3 == 0)
    {
        answer = "Fizz";
    }
    if(j % 5 == 0)
    {
        answer += "Buzz";
    }

    console.log(`${j} ${answer}`);

    j++;
} while(j <= 100); */

/* Excersise 4 */

let numberToFind = Math.round(Math.random() * 500); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

/* for (let i = 1; i <= n; i++) 
{ if(i == numberToFind)
    {
        console.log(`Found ${numberToFind}!`);
  break;
    }
  
    if(i == n)
{
    console.log(`Did not Find ${numberToFind} within 1 - ${n}..`);
}

} */

/* Exercise 5 */

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);


for( let i = start; i <= end; i++)
{
    let output = "";

    if(i % fizzDivisor == 0)
    {
        output += "Fizz";
    }

    if(i % buzzDivisor == 0)
    {
        output += "Buzz"
    }

    console.log(`${i} ${output}`);
}