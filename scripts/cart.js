
let orderCounts = {};

// Load the data from localStorage when the page loads
document.addEventListener('DOMContentLoaded', function() {
  const savedData = localStorage.getItem('orderCounts');
  
  if (savedData) {
    orderCounts = JSON.parse(savedData);
    // Optionally: Update the UI based on the retrieved data
    displayOrderCounts(orderCounts);
  }
});


function displayOrderCounts(orders) {
    Object.entries(orders).forEach(([key, value]) => {
        console.log(`Food: ${key}, Count: ${value}`);
    });
  }


  function clear(){
document.getElementById('overlay').classList.remove('hidden');
  }
  function closeOverlay() {
    document.getElementById('overlay').classList.add('hidden');
}