const { expect } = require("chai");
const Stack = require("../src/stack.js");

describe("Stack class", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("Should exist", () => {
    expect(stack).to.exist;
  });

  it("Should have properties", () => {
    expect(stack.stack).to.be.an("array");
  });

  it("Should have methods", () => {
    expect(stack.push).to.be.a("function");
    expect(stack.pop).to.be.a("function");
    expect(stack.peek).to.be.a("function");
  });
});
