const productsCountEl = document.getElementById("products-count")
console.log (productsCountEl);

const addToCartButtons = document.querySelectorAll(".add-to-cart");
console.log (addToCartButtons);


// addToCartButtons.onclick = function() {
//    alert("Hello world")
// }
// addToCartButtons.addEventListener('click',function() {
//   alert ("Hello world");
// })
//
// addToCartButtons.addEventListener('click',function() {
//   alert ("Bye-Bye")
// })

 for(let i = 0;i < addToCartButtons.length; i++) {
   addToCartButtons[i].addEventListener("click", function() {
      productsCountEl.textContent = +productsCountEl.textContent +1;
   })
 }


 // const heartButtonElements = document.querySelectorAll(".heart-button");
 //
 // for(let i = 0;i < heartButtonElements.length; i++) {
 //   heartButtonElements[i].addEventListener("click", function() {
 //       if (heartButtonElements[i].classList.contains("icon2_hover")) {
 //         heartButtonElements[i].classList.remove("icon2_hover");
 //       } else {
 //         heartButtonElements[i].classList.add("icon2_hover");
 //       }
 //   })
 // }

// changed like buttons
 const likedButtons = document.querySelectorAll(".icon2");
 console.log(likedButtons);

 for(let i = 0;i < likedButtons.length; i++) {
  likedButtons[i].addEventListener("click", function(){
    likedButtons[i].classList.toggle('liked');
  })
};

// Slider

$(".slider-block").slick(  {
   dots:true,
   autoplay:true,
   autoplaySpeed:2000,
   arrows:true,
});
