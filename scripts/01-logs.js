var myObj = {
  name: "Niklas",
  age: 25,
  employer: "Chas"
};

var l33t = 1337;

function error() {
  console.error('Woops!');
}

console.log("%s %O", "I'm logging an object", myObj);

console.info("This is so %i", l33t);

console.warn("I'm just a warning");

error();