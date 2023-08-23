
// Simple set up to test the params are functioning correctly and adding the right number

// function addition(num1, num2) {
//     return num1 + num2;
// }

// module.exports = addition;


//Test to check for String, missing and mixed parameters

function addition(anyParam1 = 0, anyParam2 = 0) {

    //for string parameters
  if (typeof anyParam1 === "string") {
    anyParam1 = parseInt(anyParam1) || 0;
  }

  if (typeof anyParam2 === "string") {
    anyParam2 = parseInt(anyParam2) || 0;
  }

  return anyParam1 + anyParam2;
}

function subtraction (anyParam1 = 0, anyParam2 = 0) {
  //for string parameters
  if (typeof anyParam1 === "string") {
    anyParam1 = parseInt(anyParam1) || 0;
  }

  if (typeof anyParam2 === "string") {
    anyParam2 = parseInt(anyParam2) || 0;
  }

  return anyParam1 - anyParam2;
}


function multiply(anyParam1 = 0, anyParam2 = 0) {
  //for string parameters
  if (typeof anyParam1 === "string") {
    anyParam1 = parseInt(anyParam1) || 0;
  }

  if (typeof anyParam2 === "string") {
    anyParam2 = parseInt(anyParam2) || 0;
  }

  return anyParam1 * anyParam2;
}

module.exports = {
  addition: addition,
  subtraction: subtraction,
  multiply: multiply
};
