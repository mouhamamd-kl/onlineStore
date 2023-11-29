import "@fortawesome/fontawesome-free/js/all.min.js";
// import 'bootstrap/dist/js/bootstrap.min.js'
// import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/custom.scss";
import "./css/style.css";
import './sass/style.scss';
import $ from "jquery/dist/jquery";
window.$ = window.jQuery = $;
window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");

document.querySelectorAll(".product-description").forEach((item) => {
  item.addEventListener("click", () => {
    console.log("hefdghdfgllo");
  });
});

document
  .querySelectorAll('.product-option input[name="color"]')
  .forEach((item) => {
    item.addEventListener("change", () => {
      document.querySelectorAll(".product-option.color-option").forEach((i) => {
        i.classList.remove("active");
      });
      item.parentNode.parentNode.classList.add("active");
    });
  });
document
  .querySelectorAll('.product-option input[name="size"]')
  .forEach((item) => {
    item.addEventListener("change", () => {
      document.querySelectorAll(".product-option.size-option").forEach((i) => {
        i.classList.remove("active");
      });
      item.parentNode.parentNode.classList.add("active");
    });
  });
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

document.querySelectorAll(".add-to-cart-btn").forEach((item) => {
  item.addEventListener("click", () => {
    alert("أضيف المنتج إلى عربة الشراء .");
  });
});
var d = new Date();
var year = d.getFullYear();
document.getElementById("year").innerHTML = year + "&copy;";

document.querySelectorAll("[data-product-quantity]").forEach((item) => {
  item.addEventListener("change", () => {
    let newQuantity = item.value;
    let parent = item.closest("[data-product-info]");
    let pricePerUnit = parent.getAttribute("data-product-price");
    let totalPriceForProduct = pricePerUnit * newQuantity;
    parent.querySelector(".total-price-for-product").innerHTML =
      totalPriceForProduct + "$";
      getProductsTotalPrice();
  });
});
function getProductsTotalPrice(){
  let totalPriceForAllProducts = 0;
    document.querySelectorAll("[data-product-info]").forEach((product) => {
    let  pricePerUnit = product.getAttribute("data-product-price");
      let quantity = product.querySelector("[data-product-quantity]").value;
    let  totalPriceForProduct = pricePerUnit * quantity;
      totalPriceForAllProducts += totalPriceForProduct;
    });
    document.getElementById(
      "total-price-for-all-product"
    ).innerHTML = totalPriceForAllProducts;
    
}
document.querySelectorAll("[data-delete]").forEach((item) => {
  item.addEventListener("click", (event) => {
    const parentRow = item.closest("[data-product-info]").remove();
    getProductsTotalPrice();
  });
});
