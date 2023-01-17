import aboutImage from "../src/about.jpg";

export default function About() {
  const about = document.createElement("div");
  about.classList.add("about");

  const aboutImg = new Image();
  aboutImg.src = aboutImage;
  aboutImg.classList.add("about-image");
  about.appendChild(aboutImg);

  const aboutText = document.createElement("div");
  aboutText.classList.add("about-text");

  const aboutTitle = document.createElement("h2");
  aboutTitle.classList.add("about-title");
  aboutTitle.innerText = "About Our Restaurant";
  aboutText.appendChild(aboutTitle);

  const aboutDescription = document.createElement("p");
  aboutDescription.classList.add("about-description");
  aboutDescription.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vel, soluta tenetur velit placeat cumque provident repellendus, iure in natus animi voluptates tempora aspernatur sit, ex facere. Delectus, nihil impedit labore dolor at debitis, rem tempora nesciunt illum sed asperiores, incidunt amet architecto magni itaque?`;
  aboutText.appendChild(aboutDescription);

  const aboutBtn = document.createElement("button");
  aboutBtn.classList.add("about-btn");
  aboutBtn.innerText = "Learn more →";
  aboutText.appendChild(aboutBtn);

  about.appendChild(aboutText);
  return about;
}