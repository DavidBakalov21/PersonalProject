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
  function addToOrder(food) {
    orderCounts[food].count++;
    localStorage.setItem('orderCounts', JSON.stringify(orderCounts));
    showOverlay(food);
}

  function showOverlay(text) {
    const savedData = JSON.parse(localStorage.getItem('orderCounts'));
    let count = savedData[text];
    console.log(count);
    document.getElementById('overlay').classList.remove('hidden');
    document.getElementById("ChoiceText").textContent="You ordered "+text;
    document.getElementById("amount").textContent="You already have "+count.count;
}

function closeOverlay() {
    document.getElementById('overlay').classList.add('hidden');
}