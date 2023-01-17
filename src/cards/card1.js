import Meal1 from "../meal1.jpg";
import Icon from "../plus.png";

export default function Card1() {
  const mealCard1 = document.createElement("div");
  mealCard1.classList.add("meal-card");

  const mealImage = new Image();
  mealImage.src = Meal1;
  mealImage.classList.add("meal-image");
  mealCard1.appendChild(mealImage);

  const mealTilte = document.createElement("h3");
  mealTilte.classList.add("meal-title");
  mealTilte.innerText = "Salted egg chicken rice";
  mealCard1.appendChild(mealTilte);

  const mealDescription = document.createElement("p");
  mealDescription.classList.add("meal-description");
  mealDescription.innerText =
  Approachable, colorful, delicious and certified organic, Green Chef offers home cooks sustainably sourced, premium ingredients and recipes curated by chefs. Boxes arrive with premeasured ingredients and detailed recipe cards, and in 30 to 40 minutes, you’ll be feasting like royalty — after you pause to post photos of your meal masterpiece, of course  mealCard1.appendChild(mealDescription);

  const order = document.createElement("div");
  order.classList.add("order");
  const orderIcon = new Image();
  orderIcon.src = Icon;
  orderIcon.classList.add("order-icon");
  order.appendChild(orderIcon);
  const orderText = document.createElement("p");
  orderText.classList.add("order-text");
  orderText.innerText = "Add to Order";
  order.appendChild(orderText);

  mealCard1.appendChild(order);

  const price = document.createElement("div");
  price.classList.add("price");
  price.innerText = "$16.99";

  mealCard1.appendChild(price);

  return mealCard1;
}