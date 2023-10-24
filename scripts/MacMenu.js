let defaultOrderCounts = {
    "Royal Cheese": 0,
    "Cheeseburger": 0,
    "Hamburger": 0,
    "McChicken": 0,
    "Double Royal Cheese": 0,
    "Chicken Roll": 0,
    "Medium fries": 0,
    "Large fries": 0,
    "Chicken McNuggets": 0
  };
  let orderCounts = JSON.parse(localStorage.getItem('orderCounts')) || defaultOrderCounts;
  function addToOrder(food) {
      orderCounts[food]++;

      console.log(`${food} has been ordered ${orderCounts[food]} times.`);
      localStorage.setItem('orderCounts', JSON.stringify(orderCounts));
      showOverlay(food);
  }

  function showOverlay(text) {
    const savedData = JSON.parse(localStorage.getItem('orderCounts'));
    let count = savedData[text];
    console.log(count);
    document.getElementById('overlay').classList.remove('hidden');
    document.getElementById("ChoiceText").textContent="You ordered "+text;
    document.getElementById("amount").textContent="You already have "+count;
}

function closeOverlay() {
    document.getElementById('overlay').classList.add('hidden');
}