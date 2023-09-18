let images = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg"];
let imageIndex = 0;

let prev_btn = document.querySelector("#prev");
let next_btn = document.querySelector("#next");

let image_holder = document.querySelector("#img-holder");

function nextImg() {
  imageIndex++;
  if (imageIndex > images.length - 1) {
    imageIndex = 0;
  }
  image_holder.setAttribute("src", images[imageIndex]);
  console.log(imageIndex);
}

function prevImg() {
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = images.length - 1;
  }
  image_holder.setAttribute("src", images[imageIndex]);
  console.log(imageIndex);
}

setInterval(() => {
  nextImg();
}, 3000);
next_btn.addEventListener("click", nextImg);
prev_btn.addEventListener("click", prevImg);
