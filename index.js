/*const Caroline = {
    name: "Caroline",
    dob: 2004,
    graduated: false,
    age: function() {
        return 2020 - this.dob;
    }
};*/

/*const Homer = {
  name: "Homer",
  age: 32,
  family: {
    wife: {
      name: "Marge"
    },
    son: {
      name: "Bart"
    }
  },
  pets: ["cat", "dog"]
};*/

/*const Haoran = {
    name: "how",
    dob: 2001,
    year: "Senior",
    age: function() {
        return 2020 - this.dob;
    }
};*/
/*const Eric = Haoran;//references to Haoran (don't do this!!!)
Eric.name = "Eric";
const Christian = {};
Christian.dob = Haoran.dob;
Christian.dob = 2003;*/
/*const calculator = {
    add: //function x + y,
    subtract: //function x - y
}*/

const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" }
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones
//presidents.filter(president => president.party === "D").forEach(president => console.log(president.name));

//2)Filter all presidents to leave only one term Republican presidents HINT use If statement
//A)without if statement
//presidents.filter(president => president.party === "R").filter(president => president.terms === 1).forEach(president => console.log(president.name))

//B)WITH IF STATEMENT
/*for (let i = 0; i < presidents.length; i++) {
  if (presidents[i].party === "R" && presidents[i].terms === 1) {
    console.log(presidents[i].name);
  }
}*/

//C)using only what we learned so far and including IF STATEMENT
/*function oneTermR(x) {
  if (x.party === "R" && x.terms === 1) {
    console.log(x.name);
  }
}
presidents.forEach(president => oneTermR(president));*/

//3) return only the last three presidents
//presidents.slice(0, 3).forEach(president => console.log(president.name))

//4) log all dems who served 2 terms. HINT use chain filter, filter and slice
//A)Using two filters
//presidents.filter(president => president.party === "D").filter(president => president.terms === 2).forEach(president => console.log(president.name))

//B)Using only one filter
//presidents.filter(president => president.party === "D" && president.terms === 2).forEach(president => console.log(president.name))

//how would you use slice?

//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"
/*let x = presidents.filter(president => president.name === "Lyndon Johnson")
if (x[0].terms === 2) {
  alert("LBJ served two terms")
} else {
  alert("LBJ was one and done")
}*/