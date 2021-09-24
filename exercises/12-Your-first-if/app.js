var total = prompt('How many km are left to go?');

// Your code below:
if(parseFloat(total)> 100){

    console.log("We still have a bit of driving left to go");


}

else if (parseFloat(total)<= 100 && parseFloat(total)> 50) {
    console.log("We'll be there in 5 minutes");
}

else{

    console.log("I'm parking. I'll see you right now");

}
