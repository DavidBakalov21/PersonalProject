let defaultOrderCounts = {
  "Royal Cheese": { count: 0, price: 6.99 },
  "Cheeseburger": { count: 0, price: 8.49 },
  "Hamburger": { count: 0, price: 4.99 },
  "McChicken": { count: 0, price: 4.49 },
  "Double Royal Cheese": { count: 0, price: 9.99 },
  "Chicken Roll": { count: 0, price: 5.79 },
  "Medium fries": { count: 0, price: 5.19 },
  "Large fries": { count: 0, price: 6.79 },
  "Chicken McNuggets": { count: 0, price: 5.99 }
};
let orderCounts = JSON.parse(localStorage.getItem('orderCounts')) || defaultOrderCounts;

document.addEventListener('DOMContentLoaded', function() {
  displayOrderCounts(orderCounts);
});

function clearCart() {
  document.getElementById('overlay').classList.remove('hidden');
}

function closeOverlay() {
  document.getElementById('overlay').classList.add('hidden');
}

function deleteOrder() {
  localStorage.removeItem('orderCounts');
  orderCounts = { ...defaultOrderCounts };
  displayOrderCounts(orderCounts);
}

function confirm() {
  document.getElementById('overlay').classList.remove('hidden');
}

function displayOrderCounts(orders) {
  let container = document.getElementById("orderedItems");
  container.innerHTML = "";

  let total = 0;

  Object.entries(orders).forEach(([key, item]) => {
      if (item.count > 0) {
          const itemElem = document.createElement("div");
          itemElem.classList.add("ordered-item");

          const priceForAllItems = item.count * item.price;
          total += priceForAllItems;

          itemElem.textContent = `Food: ${key}, Count: ${item.count}, Total Price: $${priceForAllItems.toFixed(2)}`;
          container.appendChild(itemElem);
      }
  });

  // Display total amount if required
  const totalElem = document.createElement("div");
  totalElem.classList.add("total-amount");
  totalElem.textContent = `Total: $${total.toFixed(2)}`;
  container.appendChild(totalElem);
}