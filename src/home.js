import BgImage from "./home.jpg";

export default function home() {
  const container = document.createElement("div");
  container.classList.add("container");
  const title = document.createElement("h1");
  title.textContent = "Very Luxury Restaurant";
  container.appendChild(title);

  const description = document.createElement("p");
  description.textContent = `We want to be your partner for all your food and drink needs. We offer a
  huge selection of fresh food products for your everyday life, including
  meat, fresh fish, fruit and vegetables as well as dairy products and
  snacks. Of course you can rely on our brand's quality requirements with
  regard to these products: good value for money, no artificial flavorings
  or preservatives. Our assortment also includes kitchen utensils such as
  pots and pans, which are important to us in terms of quality and
  functionality.`;
  container.appendChild(description);

  const homeImage = new Image();
  homeImage.src = BgImage;
  homeImage.classList.add("bg-image");

  container.appendChild(homeImage);

  return container;
}