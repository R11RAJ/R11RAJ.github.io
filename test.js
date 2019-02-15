importPackage(java.io);
importPackage(java.lang);

// your code goes here
let sum=0;
for(let i=1;i<1000;i++)
{
	if(i%3 || i%5)
	{
		sum+=i;
	}
}
console.log("Sum of multiples is",sum)
