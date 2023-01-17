import Card1 from "./cards/card1";
import Card2 from "./cards/card2";
import Card3 from "./cards/card3";
import Card4 from "./cards/card4";

export default function menu() {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu");

  menuDiv.appendChild(Card1());
  menuDiv.appendChild(Card2());
  menuDiv.appendChild(Card3());
  menuDiv.appendChild(Card4());

  return menuDiv;
}