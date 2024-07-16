let seq = 0;
let calcNumber = 0;
const yesCalc = document.querySelector(".yes");
const leButton = document.querySelector(".yes", ".no");

function tryAgain() {
	document.querySelector(".js-numbers-display").classList.remove("js-text1");
	document.querySelector(".js-try-again").classList.remove("js-display");
	document.querySelector(".js-yesno").classList.remove("display-button");
	document.querySelector(".js-yesno2").classList.remove("display-button");
	document.querySelector(".js-yesno").classList.add("display-button");
	document.querySelector(".js-yesno2").classList.add("display-button");
	seq = 0;
	calcNumber = 0;
}
function yes() {
	if (seq === 0) {
		calcNumber += 1;
		secondWindow();
		seq++;
	} else if (seq === 1) {
		calcNumber += 4;
		thirdWindow();
		seq++;
	} else if (seq === 2) {
		calcNumber += 2;
		fourthWindow();
		seq++;
	} else if (seq === 3) {
		calcNumber += 8;
		fifthWindow();
		seq++;
	} else if (seq === 4) {
		calcNumber += 16;
		seq++;
		document.querySelector(".js-text").innerHTML = `Your number is`;
		document.querySelector(".js-numbers-display").innerHTML = `${calcNumber}`;
		document.querySelector(".js-numbers-display").classList.add("js-text1");
		document.querySelector(".js-try-again").classList.add("js-display");
		document.querySelector(".js-yesno").classList.remove("display-button");
		document.querySelector(".js-yesno2").classList.remove("display-button");
	}
	console.log(calcNumber);
	console.log(`Sequence ${seq}`);
}

function no() {
	if (seq === 0) {
		secondWindow();
		seq++;
	} else if (seq === 1) {
		thirdWindow();
		seq++;
	} else if (seq === 2) {
		fourthWindow();
		seq++;
	} else if (seq === 3) {
		fifthWindow();
		seq++;
	} else if (seq === 4) {
		seq++;
		document.querySelector(".js-text").innerHTML = `Your number is`;
		document.querySelector(".js-numbers-display").innerHTML = `${calcNumber}`;
		document.querySelector(".js-numbers-display").classList.add("js-text1");
		document.querySelector(".js-try-again").classList.add("js-display");
		document.querySelector(".js-yesno").classList.remove("display-button");
		document.querySelector(".js-yesno2").classList.remove("display-button");
		if (calcNumber === 0) {
			document.querySelector(".js-text").innerHTML = ``;
			document.querySelector(
				".js-numbers-display"
			).innerHTML = `Your number is out of range`;
		}
	}
	console.log(calcNumber);
	console.log(`Sequence ${seq}`);
}

function startWindow() {
	document.querySelector(
		".js-text"
	).innerHTML = `Click YES if you found your number below, click NO if it's not present`;
	document.querySelector(".yes").innerHTML = "YES";
	document.querySelector(".no").innerHTML = "NO";
	document.querySelector(".js-button").classList.add("js-remove");
	document.querySelector(".js-yesno").classList.add("display-button");
	document.querySelector(".js-yesno2").classList.add("display-button");
	document
		.querySelector(".js-numbers-display")
		.classList.add("js-numbers-display-is-toggled");
	document.querySelector(".js-numbers-display").innerHTML =
		"1	3	5	7	9	11	13	15	17	19	21 23  25 27 29	31	";
	document.querySelector(".js-try-again").classList.remove("js-display");
}

function firstWindow() {
	document.querySelector(".js-numbers-display").innerHTML =
		"1	3	5	7	9	11	13	15	17	19	21 23  25 27 29	31	";
	document.querySelector(".js-try-again").classList.remove("js-display");
}

function secondWindow() {
	document.querySelector(".js-numbers-display").innerHTML =
		"4	5	6	7	12	13	14	15	20	21 22	23 	28	30 29 31";
}

function thirdWindow() {
	document.querySelector(".js-numbers-display").innerHTML =
		"2	3	6	7	10	11	14	15	18	19	22 23 26 27	30	31";
}

function fourthWindow() {
	document.querySelector(".js-numbers-display").innerHTML =
		"8	9	10	11	12	13	14	15	24	25 26 27	28	29	30	31";
}

function fifthWindow() {
	document.querySelector(".js-numbers-display").innerHTML =
		"16	17	18	19	20	21	22	23	24	25	26	28 27 29 31 30";
}
