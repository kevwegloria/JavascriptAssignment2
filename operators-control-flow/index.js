//Question 3

let bola ="Government, Economics, Literature, History"; 
let science = "Physics, Chemistry, Biology, Technical Drawing";
let social = "Accounting, Commerce, Marketing, Geography";
let arts = "Government, Economics, Literature, History";
let general = "English Mathematics";

if (bola === science) {
    console.log(science)
} else if (bola === arts){
    console.log(arts)
} else if (bola === social){
    console.log(social)
}else {
    console.log(general)
}

//Question 5
let pwr = 8;
let num = 10;

while (num < 10) {
    num --;
    if (num % 2 === 0) {
        continue;
    }
    pwr += num;
}

console.log("The number" + " " + pwr + " " + "is the power of 2 nearest to" + " " + num)


 