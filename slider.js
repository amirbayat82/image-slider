// Put all images sources in array
let images = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg"];
// set A counter for array index for next and prev btn 
let imageIndex = 0;

// select Next And prev button on HTML Document file
let prev_btn = document.querySelector("#prev");
let next_btn = document.querySelector("#next");

// Select Image Tag In HTML File
let image_holder = document.querySelector("#img-holder");

// Next image function for Next Image button On Slider
function nextImg() {
  imageIndex++;
  if (imageIndex > images.length - 1) {
    imageIndex = 0;
  }
  image_holder.setAttribute("src", images[imageIndex]);
  console.log(imageIndex);
}
// Prev image function for prev Image button On Slider
function prevImg() {
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = images.length - 1;
  }
  image_holder.setAttribute("src", images[imageIndex]);
  console.log(imageIndex);
}

// set interval for skip automaticaly images 
setInterval(() => {
  nextImg();
}, 3000);
// set event for next & prev buttons when clicked !
next_btn.addEventListener("click", nextImg);
prev_btn.addEventListener("click", prevImg);
