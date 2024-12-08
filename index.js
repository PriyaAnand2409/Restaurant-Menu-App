const BestSeller = [
  {
    id: 1,
    name: "Burger",
    description: "Description of the best seller item.",
    img:"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    price: 10.99,
    discount_price: 8.99,
  },
  {
    id: 2,
    name: "pasta",
    description: "Description of the best seller item.",
    img:"https://c7.alamy.com/comp/J9N2MP/delicious-food-italian-pasta-with-slices-of-pork-broccoli-tomatoes-J9N2MP.jpg",
    price: 8.99,
    discount_price: 7.99,
  },
  {
    id: 3,
    name: "salad",
    description: "Description of the best seller item.",
    img:"https://c7.alamy.com/comp/PY4FHT/food-meal-recipe-in-asian-and-south-indian-delicious-and-traditional-healthy-food-fruit-juice-coffee-tea-and-chinese-closeup-cuisine-delicious-PY4FHT.jpg",

    price: 8.99,
    discount_price: 5.99,
  },
  {
    id: 4,
    name: "Pizza",
    description: "Description of the best seller item.",
    img:"https://c7.alamy.com/comp/HGWRP8/delicious-food-HGWRP8.jpg",

    price: 8.99,
    discount_price: 5.99,
  },
];
const bestseller_content = document.getElementById("best-seller"); //best seller content

for (let i = 0; i < BestSeller.length; i++) {
  const item = BestSeller[i];
  bestseller_content.innerHTML += ` 
      <div class="menu-card">
                <img src=${item.img} alt=${item.name}>
                <div class="menu-card-content">
                  <h4>${item.name}</h4>
                  <p>${item.description}</p>
                  <span>Price: <strike class="strike-price">$${item.price}</strike> $${item.discount_price}<span style="color:rgb(243, 57, 57); font-size: 13px;">10% off</span></span>
                </div>
                <div class="add-to-cart-btn">
                  <button class="cta-button">Add to Cart</button>
                </div>
              </div>`;
}
