// Q1
var Output = Number(window.prompt(" Q1 -->Input="));
// window.alert("output =" + Output);
document.getElementById("Q1").innerHTML = Output

// Q2 
var outputQ2 = Number(window.prompt("Q2 --> Input"));
document.getElementById("outputQ2").innerHTML = outputQ2;

if ((outputQ2 % 3) == 0) {
    document.getElementById("Q2").innerHTML = " Yes"
}
else {
    document.getElementById("Q2").innerHTML = " No"

}
// Q3
var num1 = Number(window.prompt("Q3 --> Number one ="));
var num2 = Number(window.prompt("Q3 --> Number Two ="));
document.getElementById("Q3num1").innerHTML = num1
document.getElementById("Q3num2").innerHTML = num2


if (num1 > num2) {
    document.getElementById("Q3").innerHTML = num1
}
else {
    document.getElementById("Q3").innerHTML = num2
}

// Q4
var num_4_1 = Number(window.prompt("Q4---Number "));
document.getElementById("num_4_1").innerHTML = num_4_1;
if (num_4_1 > 0) {
    document.getElementById("num_4_1_n").innerHTML = " Postive";
}
else if (num_4_1 < 0) {

    document.getElementById("num_4_1_n").innerHTML = " negative";
}
else (
    document.getElementById("num_4_1_n").innerHTML = "Output = 0"
)

// Q5

var num_5_1 = Number(window.prompt("Q5---Number1"));
var num_5_2 = Number(window.prompt("Q5---Number2"));
var num_5_3 = Number(window.prompt("Q5---Number3"));
document.getElementById("num_5_1").innerHTML = num_5_1
document.getElementById("num_5_2").innerHTML = num_5_2
document.getElementById("num_5_3").innerHTML = num_5_3
if (num_5_1 > num_5_2 && num_5_1 > num_5_3) {
    document.getElementById("num_5Max").innerHTML = num_5_1

    if (num_5_2 < num_5_3) {
        document.getElementById("num_5Min").innerHTML = num_5_2
    }
    else {
        document.getElementById("num_5Min").innerHTML = num_5_3
    }

}
else if (num_5_2 > num_5_1 && num_5_2 > num_5_3) {
    document.getElementById("num_5Max").innerHTML = num_5_2
    if (num_5_1 > num_5_3) {
        document.getElementById("num_5Min").innerHTML = num_5_3
    }
    else {
        document.getElementById("num_5Min").innerHTML = num_5_1
    }
}
else {
    document.getElementById("num_5Max").innerHTML = num_5_3

    if (num_5_1 > num_5_2) {
        document.getElementById("num_5Min").innerHTML = num_5_2
    }
    else {
        document.getElementById("num_5Min").innerHTML = num_5_1
    }
}

// Q6.Q7

var outputQ6 = Number(window.prompt("Q6 --> Input"));
document.getElementById("outputQ6").innerHTML = outputQ6;

if ((outputQ6 % 2) == 0) {
    document.getElementById("Q6").innerHTML = " EVEN"
}
else {

    document.getElementById("Q6").innerHTML = " Odd"

}

// Q8


var outputQ8 = (window.prompt("Q8 --> Input Character"));
document.getElementById("outputQ8").innerHTML = outputQ8;

if (outputQ8 == "a" || outputQ8 == " e " || outputQ8 == "l" || outputQ8 == "o" || outputQ8 == "u" || outputQ8 == " A" || outputQ8 == "E" || outputQ8 == "L" || outputQ8 == "O" || outputQ8 == "U") {
    document.getElementById("Q8").innerHTML = "vowel";
}
else {

    document.getElementById("Q8").innerHTML = " Consonant"

}

// Q9

var num_Q9 = Number(window.prompt("Q9---> Input number "));
document.getElementById("num_Q9").innerHTML = num_Q9;

var result = "";
for (var i = 0; i <= num_Q9; i++) {
    result += i + ",";


}

console.log(result);
document.getElementById("result").innerHTML = result;




// Q10
var numQ10 = Number(window.prompt("Q10--->input"))
document.getElementById("numQ10").innerHTML = numQ10;

var multy = 0;
var multyn = "";
for (var i = 0; i < 12; i++) {
    multy = multy + numQ10;
    multyn = multyn + multy + ",";
}
console.log(multyn);
document.getElementById("multyn").innerHTML = multyn;



// Q11
var num_Q11 = Number(window.prompt("Q11---> Input number "));
document.getElementById("num_Q11").innerHTML=num_Q11

var resultQ11 = "";
for (var i = 0; i <= num_Q11; i += 2) {
    if (i != 0) {
        resultQ11 += i + ",";
    }

}
console.log(resultQ11);
document.getElementById("resultQ11").innerHTML=resultQ11;

// Q12

var numQ12_1 = Number(window.prompt("Q12---> Input number_1 "));
var numQ12_2 = Number(window.prompt("Q12---> Input number_2 "));
var multyQ12 = 1;
document.getElementById("numQ12_1").innerHTML=numQ12_1;
document.getElementById("numQ12_2").innerHTML=numQ12_2;


for (var i = 0; i < numQ12_2; i++) {
    multyQ12 = multyQ12 * numQ12_1;

}
console.log(multyQ12);
document.getElementById("multyQ12").innerHTML=multyQ12;


// Q12 B

var numQ12b_1 = Number(window.prompt("Q12B---> Input number_1 "));
var numQ12b_2 = Number(window.prompt("Q12B---> Input number_2 "));

var numQ12b_3 = Number(window.prompt("Q12B---> Input number_3 "));
var numQ12b_4 = Number(window.prompt("Q12B---> Input number_4 "));

var numQ12b_5 = Number(window.prompt("Q12B---> Input number_5 "));

var TotalMarks = numQ12b_1 + numQ12b_2 + numQ12b_3 + numQ12b_4 + numQ12b_5
var avrageMark = TotalMarks / 5;
var percentage = (avrageMark / (500)) * 100;

document.getElementById("bnumQ12b_1").innerHTML = numQ12b_1;

document.getElementById("bnumQ12b_2").innerHTML = numQ12b_2;
document.getElementById("bnumQ12b_3").innerHTML = numQ12b_3;
document.getElementById("bnumQ12b_4").innerHTML = numQ12b_4;
document.getElementById("bnumQ12b_5").innerHTML = numQ12b_5;
document.getElementById("bTotalMarks").innerHTML = TotalMarks;
document.getElementById("bavrageMark").innerHTML = avrageMark;
document.getElementById("bpercentage").innerHTML = percentage;
console.log(TotalMarks)
console.log(avrageMark)
console.log(percentage)


// Q13


var numQ13_1 = 31;
var numQ13_2 = Number(window.prompt("Q13---> Input number of Month "));
var multyQ13 = 0;
document.getElementById("numQ13_2").innerHTML=numQ13_2;


for (var i = 0; i < numQ13_2; i++) {
    multyQ13 = multyQ13 + numQ13_1;

}
document.getElementById("Ahmed").innerHTML=multyQ13;
console.log(multyQ13);


// Q14


var numQ14_1 = Number(window.prompt("Q12B---> Input number_Physics"));
var numQ14_2 = Number(window.prompt("Q12B---> Input number_Chemisty "));

var numQ14_3 = Number(window.prompt("Q12B---> Input number_Biology"));
var numQ14_4 = Number(window.prompt("Q12B---> Input number_Mathematics"));
var numQ14_5 = Number(window.prompt("Q12B---> Input number_Computer "));

document.getElementById("numQ14_1").innerHTML=numQ14_1;
document.getElementById("numQ14_2").innerHTML=numQ14_2;
document.getElementById("numQ14_3").innerHTML=numQ14_3;
document.getElementById("numQ14_4").innerHTML=numQ14_4;
document.getElementById("numQ14_5").innerHTML=numQ14_5;

var TotalMarksQ14 = numQ14_1 + numQ14_2 + numQ14_3 + numQ14_4 + numQ14_5
var avrageMarkQ14 = TotalMarksQ14 / 500;
var percentageQ14 = (avrageMarkQ14) * 100;



console.log("TotalMarks (500) =", TotalMarksQ14)
console.log("percentage =", percentageQ14)
if (percentageQ14 >= 90) {
    console.log("Grad A")
    document.getElementById("numQ14_5a").innerHTML="Grad A";

}
else if (percentageQ14 >= 80) {
    console.log("Grad B")
    document.getElementById("numQ14_5a").innerHTML="Grad B";

}
else if (percentageQ14 >= 70) {
    console.log(" Grad C")
    document.getElementById("numQ14_5a").innerHTML="Grad C";

}
else if (percentageQ14 >= 60) {
    console.log("Grad D")
    document.getElementById("numQ14_5a").innerHTML="Grad D";

}
else if (percentageQ14 >= 40) {
    console.log("Grad E")
    document.getElementById("numQ14_5a").innerHTML="Grad E";

}
else { console.log("Grad F")
    document.getElementById("numQ14_5a").innerHTML="Grad F";

 }


// Q15

var numQ15_1 = 31;
var numQ13_2 = Number(window.prompt("Q15---> Input number of Month "));
document.getElementById("numQ13_2").innerHTML=numQ13_2;

var multyQ13 = 0;
switch (numQ13_2) {
    case 1:
        multyQ13 = numQ15_1;
        break;
    case 2:
        multyQ13 = numQ15_1 * 2;
        break;
    case 3:
        multyQ13 = numQ15_1 * 3;
        break;

    case 4:
        multyQ13 = numQ15_1 * 4;
        break;
    case 5:
        multyQ13 = numQ15_1 * 5;
        break;
    case 6:
        multyQ13 = numQ15_1 * 6;
        break;
    case 7:
        multyQ13 = numQ15_1 * 7;
        break;
    case 8:
        multyQ13 = numQ15_1 * 8;
        break;
    case 9:
        multyQ13 = numQ15_1 * 9;
        break;
    case 10:
        multyQ13 = numQ15_1 * 10;
        break;
    case 11:
        multyQ13 = numQ15_1 * 11;
        break;
    case 12:
        multyQ13 = numQ15_1 * 12;
        break;


    default:
        multyQ13 = numQ15_1 * 0;

        break;
}

console.log(multyQ13);
document.getElementById("multyQ13").innerHTML=multyQ13;

// Q16

var outputQ16 = (window.prompt("Q16 --> Input Character"));
document.getElementById("outputQ16").innerHTML=outputQ16;

switch (outputQ16) {
    case "a":
        console.log("Output is  vowel");
        document.getElementById("Q16").innerHTML="Output is  vowel";


        break;
    case "e":
        console.log("Output is  vowel");
        document.getElementById("Q16").innerHTML="Output is  vowel";

        break;
    case "l":
        console.log("Output is  vowel");
        document.getElementById("Q16").innerHTML="Output is  vowel";

        break;
    case "o":
        console.log("Output is  vowel");
        document.getElementById("Q16").innerHTML="Output is  vowel";

        break;
    case "u":
        console.log("Output is  vowel");
        document.getElementById("Q16").innerHTML="Output is  vowel";

        break;

    default:
        console.log("Output is  Consonant");
        document.getElementById("Q16").innerHTML="Output is  Consonant";

        break;
}

// Q18
var numQ18a = (window.prompt("Q18 --> Input num_1"));

document.getElementById("numQ18a").innerHTML = numQ18a;


switch (true) {
    case (numQ18a % 2 == 0):
        console.log("Number1 =", numQ18a, " is even");
        document.getElementById("numQ18aa").innerHTML = numQ18a;




        break;
    case (numQ18a % 2 != 0):

        document.getElementById("numQ18abb").innerHTML = numQ18a;

        console.log("Number1 =", numQ18a, " is odd");
        break;
    default:

        break;
}


// Q17
var numQ17a = (window.prompt("Q17 --> Input num_1"));
var numQ17b = (window.prompt("Q17 --> Input num_2"));
document.getElementById("numQ17a").innerHTML=numQ17a ;
document.getElementById("numQ17b").innerHTML=numQ17b ;


switch (true) {
    case (numQ17a > numQ17b):
        console.log("Number1 =", numQ17a, " :max Number");
        console.log("Number2 =", numQ17b, " :min Number");
        document.getElementById("numQ17aa").innerHTML=numQ17a , "max Number";
        document.getElementById("numQ17bb").innerHTML=numQ17b , "min Number";



        break;
    case (numQ17a < numQ17b):
        console.log("Number2 =", numQ17b, " :max Number");
        console.log("Number1 =", numQ17a, " :min Number");
        document.getElementById("numQ17bb").innerHTML=numQ17a , "max Number";
        document.getElementById("numQ17aa").innerHTML=numQ17b , "min Number";

    default:
        console.log("Number2 =", numQ17b, " =Number1 ");
        document.getElementById("numQ17aa").innerHTML=numQ17b , "Exual Number";

        break;
}

// Q19
var numQ19a = Number(window.prompt("Q19 --> Input number"));
document.getElementById("numQ19a").innerHTML = numQ19a;



switch (true) {
    case (numQ19a > 0):
        console.log("Number =", numQ19a, " is posative");

        document.getElementById("Q19").innerHTML = " is posative";



        break;
    case (numQ19a < 0):

        console.log("Number =", numQ19a, " is negative");
        document.getElementById("Q19").innerHTML = " is negative";

        break;
        document.getElementById("Q19").innerHTML = " is n";

    default:
        console.log("Number =", numQ19a, " is zero");
        document.getElementById("Q19").innerHTML = " is zero";

        break;
}

// Q20

var numQ20A = Number(window.prompt("Q20---> Input number 1 "));
var cal = (window.prompt("Q20---> Input (+ , - , * , /)"));
var numQ20B = Number(window.prompt("Q20---> Input number 2 "));
var Equal;
switch (cal) {
    case "+":
        Equal = numQ20A + numQ20B;
        console.log("Equal =", numQ20A, "+", numQ20B, "=", Equal);

        break;
    case "-":
        Equal = numQ20A - numQ20B;
        console.log("Equal =", numQ20A, "-", numQ20B, "=", Equal);

        break;
    case "*":
        Equal = numQ20A * numQ20B;
        console.log("Equal =", numQ20A, "*", numQ20B, "=", Equal);

        break;

    case "/":
        Equal = numQ20A / numQ20B;
        console.log("Equal =", numQ20A, "/", numQ20B, "=", Equal);

        break;
    default:
        console.log("Error");

        break;
}