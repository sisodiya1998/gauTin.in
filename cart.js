// Add to cart button event listener
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', addToCartClicked);
});

// Remove item button event listener
document.querySelector('#cart tbody').addEventListener('click', removeCartItem);

// Update quantity event listener
document.querySelector('#cart tbody').addEventListener('change', quantityChanged);

// Checkout button event listener
document.querySelector('.checkout-button').addEventListener('click', checkoutClicked);

function addToCartClicked(event) {
  // Get product details from the button
  const button = event.target;
  const name = button.getAttribute('data-name');
  const price = button.getAttribute('data-price');
  addItemToCart(name, price);
}

function addItemToCart(name, price) {
  const cartRow = document.createElement('tr');
  cartRow.classList.add('cart-item');
  const cartItems = document.querySelector('#cart tbody');
  const cartItemNames = cartItems.querySelectorAll('.cart-item td:first-child');
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText === name) {
      alert('This item is already added to the cart');
      return;
    }
  }
  const cartRowContents = `
    <td>${name}</td>
    <td>${price}</td>
    <td><input type="number" value="1" min="1"></td>
    <td class="cart-item-price">${price}</td>
    <td><button class="remove-button">Remove</button></td>
  `;
  cartRow.innerHTML = cartRowContents;
  cartItems.append(cartRow);
  updateCartTotal();
}

function removeCartItem(event) {
  const buttonClicked = event.target;
  if (!buttonClicked.classList.contains('remove-button')) {
    return;
  }
  buttonClicked.closest('.cart-item').remove();
  updateCartTotal();
}

function quantityChanged(event) {
  const input = event.target;
  if (!input.classList.contains('cart-item-quantity')) {
    return;
  }
  const cartItem = input.closest('.cart-item');
  const priceElement = cartItem.querySelector('.cart-item-price');
  const price = parseFloat(priceElement.innerText.replace('$', ''));
  const quantity = parseInt(input.value);
  const total = pricequantity;
  priceElement.innerText = $${total.toFixed(2)};
  updateCartTotal();
  }
  function updateCartTotal() {
  const cartItemContainer = document.querySelector('#cart tbody');
  const cartRows = cartItemContainer.querySelectorAll('.cart-item');
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
  const cartRow = cartRows[i];
  const priceElement = cartRow.querySelector('.cart-item-price');
  const price = parseFloat(priceElement.innerText.replace('$', ''));
  const quantityElement = cartRow.querySelector('.cart-item-quantity');
  const quantity = parseInt(quantityElement.value);
  total += price * quantity;
  }
  document.querySelector('#cart-total').innerText = $${total.toFixed(2)};
  }
  
  function checkoutClicked() {
  alert('Thank you for your purchase!');
  const cartItemContainer = document.querySelector('#cart tbody');
  while (cartItemContainer.firstChild) {
  cartItemContainer.removeChild(cartItemContainer.firstChild);
  }
  updateCartTotal();
  }
 // Scroll to Mens section when dropdown is clicked
document.querySelectorAll(".dropdown-menu a[href='#mens-section']")[0].addEventListener("click", function(e) {
  e.preventDefault();
  var mensSection = document.getElementById("mens-section");
  mensSection.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

  