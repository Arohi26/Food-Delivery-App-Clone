const restaurants = [
  {
    name: "Pizza Hut",
    image:
      "https://b.zmtcdn.com/data/pictures/chains/6/2400356/6e96bfb00b9dd20195385f866d3e0e10_featured_v2.jpg",
    rating: 4.2,
    price: "₹300 for two",
    menu: [
      { item: "Veggie Pizza", price: "₹150" },
      { item: "Cheese Burst", price: "₹180" },
      { item: "Garlic Bread", price: "₹100" },
    ],
  },
  {
    name: "Burger King",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHp64n-eLrDSrY29_HCRIuP7-p89ndb18ezw&s",
    rating: 4.0,
    price: "₹250 for two",
    menu: [
      { item: "Whopper", price: "₹190" },
      { item: "Crispy Veg", price: "₹120" },
      { item: "Fries", price: "₹80" },
    ],
  },
  {
    name: "Starbucks",
    image:
      "https://fooddrinklife.com/wp-content/uploads/2024/04/best-starbucks-coffee-drinks-2.jpg",
    rating: 4.5,
    price: "₹450 for two",
    menu: [
      { item: "Cappuccino", price: "₹210" },
      { item: "Cold Brew", price: "₹230" },
      { item: "Chocolate Donut", price: "₹90" },
    ],
  },
];

function renderRestaurants(data) {
  const container = document.getElementById("restaurant-list");
  container.innerHTML = "";

  data.forEach((r) => {
    const menuHtml = r.menu
      .map(
        (m) => `
          <li class="menu-item">
            <span>${m.item} - <strong>${m.price}</strong></span>
            <div class="menu-actions">
              <button onclick="addItem('${r.name}', '${m.item}')">Add</button>
            </div>
          </li>
        `
      )
      .join("");

    container.innerHTML += `
        <div class="card">
          <img src="${r.image}" alt="${r.name}">
          <div class="card-content">
            <div class="card-body">
              <h3>${r.name}</h3>
              <p>⭐ ${r.rating} &nbsp; | &nbsp; ${r.price}</p>
            </div>
            <ul class="menu-list">${menuHtml}</ul>
          </div>
        </div>
      `;
  });
}

renderRestaurants(restaurants);

document.getElementById("search").addEventListener("input", function () {
  const val = this.value.toLowerCase();
  const filtered = restaurants.filter((r) =>
    r.name.toLowerCase().includes(val)
  );
  renderRestaurants(filtered);
});

document.getElementById("signin-btn").addEventListener("click", () => {
  alert("🟢 Signed In successfully!");
});

document.getElementById("logout-btn").addEventListener("click", () => {
  alert("🔴 Logged out!");
});
function addItem(restaurant, item) {
  alert(`✅ Added ${item} from ${restaurant} to your order.`);
}

function renderCart() {
  const cartList = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = "<li>Your cart is empty</li>";
  } else {
    cart.forEach((c) => {
      cartList.innerHTML += `
          <li>
            ${c.item}
            <button onclick="removeItem('${c.key}')">x</button>
          </li>
        `;
    });
  }

  cartCount.innerText = cart.length;
}
