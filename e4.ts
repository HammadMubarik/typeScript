// boolean
let flag: boolean = true;
console.log("Value assigned to flag is: "+flag);

//int 
let num: number = 10;
console.log("Value of the int is: " + num);

// string
let myString: string = "Hello form the String";
console.log("String says:  " + myString);

// arrays
let arr: number[] = [1,2,3];
for(let i = 0; i<arr.length; i++)
{
    console.log("Arrays index : " + i + " has the value of: " + arr[i]);
}

arr.forEach((item)=>
{
    console.log("The value is: " + item)
})

// any
let ukn: any = "123456";
console.log("The value of ukn is : " + ukn)

function count_with_spaces(x: string): number
{
   return x.length;
}
let count = count_with_spaces("test 1");
console.log(count);

function count_without_spaces(y: string): number
{
   return y.replace(" ","").length;
}
let count2 = count_without_spaces("test 1");
console.log(count2);


function count_both(value:string, spaces:boolean): number
{
    let count: number = 0;
    if(!spaces)
    {
        count = value.length;
    }
    else
    {
        count = value.replace(" ","").length;                               
    }
    return count;
}
console.log(count_both("Test 1",true));
console.log(count_both("Test 1", false));