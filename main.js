function mouseOver(button){
	button.style.background = "#AB4967";
	button.style.color = "white";
}

function mouseOut(button){
	button.style.background = "#A04668";
	button.style.color = "white";
}

document.getElementById("fullname").onchange = function(){changeToCapital()}
function changeToCapital(){
	var fname = document.getElementById("fullname");
	fname.value = fname.value.toUpperCase();
}

function formA(){
	var f_name = document.getElementById('fullname').value;
	window.alert("Thanks for submitting, " + f_name + "! Proceed to the next form.")
}

function formB() {
    var seat = document.getElementById('seatselect').value;
    var option = document.getElementById('optionselect').value;
    
    var price = 0;
    
    if (seat === "General Admission") {
        price = 1000;
    } else if (seat === "VIP Seating") {
        price = 2000;
    } else if (seat === "Reserved Seating") {
        price = 1500;
    }
    
    if (option === "Premium") {
        price += 1000;
    } else if (option === "Budget") {
        price -= 300;
    }
    
    window.alert("Your ticket price is " + price + " pesos! Proceed to the next form.");
}


function formC(){
	window.alert("Thanks! The ticket has been sent to your email.")
}


