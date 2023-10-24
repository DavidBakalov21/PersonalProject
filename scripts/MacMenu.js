let orderCounts = {
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

  function addToOrder(food) {
      orderCounts[food]++;

      console.log(`${food} has been ordered ${orderCounts[food]} times.`);
      localStorage.setItem('orderCounts', JSON.stringify(orderCounts));
  }

