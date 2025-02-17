var a = parseInt(prompt("Enter first number = "));
var b = parseInt(prompt("Enter second number = "));

var choice = prompt("1 for Addition \n2 for subtraction \n3 multiply \n4 division \n\nEnter your choice : ");

switch (choice)
{
    case "1":
        console.log("Addition = ",parseInt(a) + parseInt(b));
        break;
    
    case "2":
        console.log("Subtraction = ",a-b);
        break;

    case "3":
        console.log("multiply = ",a*b);
        break;
    
    case "4":
        console.log("division = ",a/b);    
        break;
    
    default:
        console.log("Invalid choice");
        break;    
} 

// var a = "Royal";
// var b = "technosoft";

// console.log(a+b);