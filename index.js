var a = Math.floor(Math.random() * 1000);
var b = Math.floor(Math.random() * 1000);

function add(a,b) {
  return (a += b);
}

function subtract(a,b) {
  return (a -= b);
}

function multiple(a,b) {
  return (a *= b);
}

function divide(a,b) {
  return (a /= b);
}

function increment(n) {
  return (n += 1);
}
function decrement(n) {
  return (n -= 1);
}
