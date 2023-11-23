document.getElementById('studentInfo').innerText = 'Student ID: 200542631, Name: Christy';

function submitOrder() {
  const pizzaSize = document.getElementById('pizzaSize').value;

  const toppings = [];
  const toppingCheckboxes = document.querySelectorAll('input[name="toppings"]:checked');
  toppingCheckboxes.forEach(checkbox => toppings.push(checkbox.value));

  const pizza = new Pizza(pizzaSize, toppings);
  displayPizza(pizza);
}

class Pizza {
  constructor(size, toppings) {
    this.size = size;
    this.toppings = toppings;
  }
}

function displayPizza(pizza) {
  const pizzaOutputElement = document.getElementById('pizzaOutput');
  pizzaOutputElement.innerText = `Size: ${pizza.size}, Toppings: ${pizza.toppings.join(', ')}`;
  document.getElementById('pizzaDescription').style.display = 'block';
}
