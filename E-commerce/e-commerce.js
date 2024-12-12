const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", (e) => {
  navSearch.classList.toggle("open");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
          const product = button.dataset.product;
          const price = parseFloat(button.dataset.price);
          const image = button.dataset.image;

          // Check if item already exists in the cart
          const existingItem = cart.find(item => item.product === product);
          if (existingItem) {
              existingItem.quantity += 1; // Increase quantity
          } else {
              // Add new item to cart
              cart.push({ product, price, image, quantity: 1 });
          }

          localStorage.setItem('cart', JSON.stringify(cart)); // Save to localStorage
          alert(`${product} added to cart!`);
      });
  });
});
