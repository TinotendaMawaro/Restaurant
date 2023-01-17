import Meal2 from "../meal2.jpg";
import Icon from "../plus.png";

export default function Card2() {
  const mealCard2 = document.createElement("div");
  mealCard2.classList.add("meal-card");

  const mealImage = new Image();
  mealImage.src = Meal2;
  mealImage.classList.add("meal-image");
  mealCard2.appendChild(mealImage);

  const mealTilte = document.createElement("h3");
  mealTilte.classList.add("meal-title");
  mealTilte.innerText = "Vegetabel Salad";
  mealCard2.appendChild(mealTilte);

  const mealDescription = document.createElement("p");
  mealDescription.classList.add("meal-description");
  mealDescription.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni accusamus impedit eaque delectus aperiam neque. Tempore nostrum consequatur unde quisquam.";
  mealCard2.appendChild(mealDescription);

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

  mealCard2.appendChild(order);

  const price = document.createElement("div");
  price.classList.add("price");
  price.innerText = "$9.99";

  mealCard2.appendChild(price);

  return mealCard2;
}