var counter = 1;

function upvote() {
  counter = counter + 1;

  document.getElementById("votes")
  .innerHtml = counter + "votes";
}

function downvote() {
  counter = counter - 1;

  document.getElementById("votes")
  .innerHTML = counter + "votes";
}

var cartItems = [];
var isTotalhidden = true;

var backpack = {
  name:"Backpack",
  price: 400
}

var camera = {
  name:"camera",
  price: 300
}

function addToCart(item) {
  cartItems.push(item);
  document.getElementById("ItemCounter").innerHTML =
  cartItems.length;
  showTotal();
}

function clickCart() {
  isTotalhidden = !isTotalhidden;
  showTotal();
}

function showTotal() {
  var orderTotal = document
  .getElementById("orderTotal");
  orderTotal.innerHTML = "";

if (isTotalhidden === false) {
  var total = 0;
  for (var i = 0; i < cartItems.length; i++) {
    total += cartItems[i].price;
  }
  orderTotal.innerHTML +=
  "Total: $" + total;
}
}

function calculateTotal(total) {
  var shipping;
  if (total >= 700) {
    shipping = 30;
  } else {
    shipping = 50;
  }
  return shipping;
}
