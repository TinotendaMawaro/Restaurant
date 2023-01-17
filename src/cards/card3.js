import Meal3 from "../meal3.jpg";
import Icon from "../plus.png";

export default function Card3() {
  const mealCard3 = document.createElement("div");
  mealCard3.classList.add("meal-card");

  const mealImage = new Image();
  mealImage.src = Meal3;
  mealImage.classList.add("meal-image");
  mealCard3.appendChild(mealImage);

  const mealTilte = document.createElement("h3");
  mealTilte.classList.add("meal-title");
  mealTilte.innerText = "Light Dessert";
  mealCard3.appendChild(mealTilte);

  const mealDescription = document.createElement("p");
  mealDescription.classList.add("meal-description");
  mealDescription.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni accusamus impedit eaque delectus aperiam neque. Tempore nostrum consequatur unde quisquam.";
  mealCard3.appendChild(mealDescription);

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

  mealCard3.appendChild(order);

  const price = document.createElement("div");
  price.classList.add("price");
  price.innerText = "$12.99";

  mealCard3.appendChild(price);

  return mealCard3;
}