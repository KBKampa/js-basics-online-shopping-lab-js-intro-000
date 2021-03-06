var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart(){
  return cart
}

function addToCart(item){
  var price = Math.floor(Math.random()*100)
  var object = {}
  cart.push(Object.assign({}, object, {[item]: price}))
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart(){
  if(cart.length > 0){
    var printOut = "In your cart, you have"
    for (var i = 0; i < cart.length; i++){
      for (var itemName in cart[i]){
        printOut= printOut + ` ${itemName} at $${cart[i][itemName]},`
      }
    }
    console.log(printOut.slice(0,-1) + ".")
  } else {
    console.log("Your shopping cart is empty.")
  }
}

function removeFromCart(name){
  var a = 0
  for (var i = 0; i < cart.length; i++){
    for (var itemName in cart[i]){
      if (`${itemName}`=== name){
        cart.splice(i,1)
        a = 1
      }
    }
  } if (a === 1){
    return cart
  } else{
    console.log("That item is not in your cart.")
  }
}

function placeOrder(cardNumber){
  if (cardNumber){
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  } else{
    console.log("We don't have a credit card on file for you to place your order.")
  }
  cart = []
  return cart
}
