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

describe("Stack functionality", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("Should push a value into the stack", () => {
    expect(stack.stack).to.be.empty;
    stack.push(1);
    expect(stack.stack[0]).to.equal(1);
    stack.push(6);
    expect(stack.stack[1]).to.equal(6);
    expect(stack.stack[0]).to.equal(1);
  });

  it("Should remove the most recent item put into the stack", () => {});

  it("Should return the most recent item put into the stack", () => {});
});
