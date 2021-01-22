let person = {
	fn: "",
	ln: "",
	birthYear: "",
	job: "",
	age: 0,
	height: 0,
	weight: 0,
	eligibleToVote: false,
	familyMembers: [],
	bmi: 0,
	calcAge: function () {
		this.age = new Date().getFullYear() - this.birthYear;
	},
	checkVote: function () {
		if (this.age >= 18) {
			this.eligibleToVote = true;
			console.log("You are eligible to vote!");
		} else {
			this.eligibleToVote = false;
			console.log("You are not eligible to vote!");
		}
	},
	calcBmi: function () {
		this.bmi = this.weight / (this.height * this.height);
	},
}

let familyNu;

person.fn = prompt("What is your name?");
person.ln = prompt("What is your last name?");
person.birthYear = prompt("What year were you born?");
person.job = prompt("What do you do for a living?");
person.height = prompt("Enter your height");
person.weight = prompt("Enter your weight");
familyNu = prompt("How many family members do you have?");


console.log("Here's what you just entered");
console.log("Full name: " + person.fn.toUpperCase() + " " + person.ln.toUpperCase());

person.calcAge();
console.log("You are " + person.age + " years old.");
person.checkVote();

console.log("You work as a " + person.job);

person.calcBmi();
console.log("Your BMI is " + Math.round(person.bmi));

if (person.bmi < 18.5) {
	console.log("==> You are underweight!");
} else if (person.bmi > 18.5 & person.bmi < 24.9) {
	console.log("==> You are healthy.");
} else if (person.bmi > 25.0 & person.bmi < 29.9) {
	console.log("==> You are overweight.");
} else {
	console.log("==> You are obese!");
}

console.log("Family Members");
console.log("-------------------")
for (let index = 0; index < parseInt(familyNu); index++) {
	person.familyMembers.push(prompt("Family members " + (index + 1)));
	console.log((index + 1) + ". " + person.familyMembers[index].toUpperCase());
}