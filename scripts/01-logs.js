var myObj = {
  name: "Niklas",
  age: 25,
  employer: "Chas"
};

var l33t = 1337;

function error() {
  function makeError() {
    console.error('Woops!');
  }
  makeError();
}

console.log("%s %O", "I'm logging an object", myObj);

console.debug("Debugging...");

console.info("This is so %i", l33t);

console.warn("I'm just a warning");

error();