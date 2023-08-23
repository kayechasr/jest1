/**
 * @jest-environment jsdom
 */

//TO CREATE A DOM MOCK FOR  A PARTICULAR ELEMENT ON THE PAGE
// const buttonClick = require("../button");

// beforeEach(() => {
//   document.body.innerHTML = "<p id = 'par'></p>";
// });

// describe("DOM test", () => {
//   test("expect p content to change", () => {
//     buttonClick();
//     expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
//   });
// });

//TO CREATE A DOM MOCK FOR THE ENTIRE HTML PAGE
const buttonClick = require("../button");
let fs = require("fs");

beforeAll(() => {
  let fileContents = fs.readFileSync("index.html", "utf-8");
  document.open();
  document.write(fileContents);
  document.close();
});

afterEach(() => {
    document.body.innerHTML = "";
})

describe("DOM test", () => {
  test("expect p content to change", () => {
    buttonClick();
    expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
  });
  test("h1 should exist", () => {
    expect(document.getElementsByTagName("h1").length).toBe(1);
  });
  test("h2 should exist", () => {
    expect(document.getElementsByTagName("h2").length).toBe(1);
  });
});
