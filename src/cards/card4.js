import Meal4 from "../meal4.jpg";
import Icon from "../plus.png";

export default function Card4() {
  const mealCard4 = document.createElement("div");
  mealCard4.classList.add("meal-card");

  const mealImage = new Image();
  mealImage.src = Meal4;
  mealImage.classList.add("meal-image");
  mealCard4.appendChild(mealImage);

  const mealTilte = document.createElement("h3");
  mealTilte.classList.add("meal-title");
  mealTilte.innerText = "Sushi for Launch";
  mealCard4.appendChild(mealTilte);

  const mealDescription = document.createElement("p");
  mealDescription.classList.add("meal-description");
  mealDescription.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni accusamus impedit eaque delectus aperiam neque. Tempore nostrum consequatur unde quisquam.";
  mealCard4.appendChild(mealDescription);

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

  mealCard4.appendChild(order);

  const price = document.createElement("div");
  price.classList.add("price");
  price.innerText = "$44.99";

  mealCard4.appendChild(price);

  return mealCard4;
}