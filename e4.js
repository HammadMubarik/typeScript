// boolean
var flag = true;
console.log("Value assigned to flag is: " + flag);
//int 
var num = 10;
console.log("Value of the int is: " + num);
// string
var myString = "Hello form the String";
console.log("String says:  " + myString);
// arrays
var arr = [1, 2, 3];
for (var i = 0; i < arr.length; i++) {
    console.log("Arrays index : " + i + " has the value of: " + arr[i]);
}
arr.forEach(function (item) {
    console.log("The value is: " + item);
});
// any
var ukn = "123456";
console.log("The value of ukn is : " + ukn);
function count_with_spaces(x) {
    return x.length;
}
var count = count_with_spaces("test 1");
console.log(count);
function count_without_spaces(y) {
    return y.replace(" ", "").length;
}
var count2 = count_without_spaces("test 1");
console.log(count2);
function count_both(value, spaces) {
    var count = 0;
    if (!spaces) {
        count = value.length;
    }
    else {
        count = value.replace(" ", "").length;
    }
    return count;
}
console.log(count_both("Test 1", true));
console.log(count_both("Test 1", false));
