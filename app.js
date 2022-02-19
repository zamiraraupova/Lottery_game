function generate() {
	let size = 6;
    let lowest = 1;
    let highest = 99;
    let numbers = [];
	
    for(let i = 0; i < size; i++) {
		let add = true;
		let randomNumber = Math.floor(Math.random() * highest) + 1;
		for(let j = 0; j < highest; j++) {
			if(numbers[j] == randomNumber) {
				add = false;
			}
		}
		if(add) {
			numbers.push(randomNumber);
		} else {
			i--;
		}
	}
  
	let highestNumber = 0;
	for(let m = 0; m < numbers.length; m++) {
		for(let n = m + 1; n < numbers.length; n++) {
			if(numbers[n] < numbers[m]) {
				highestNumber = numbers[m];
				numbers[m] = numbers[n];
				numbers[n] = highestNumber;
			}
		}
	}
  
	document.getElementById("numbers").innerHTML = numbers.join(" - ");
}


// https://dmarcisovska.medium.com/javascript-lottery-number-generator-1e1f82090d53