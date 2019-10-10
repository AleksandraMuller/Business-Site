// A function that adds and remove the class "active" on the section you click on.
// We haven't really talked about ´this´ yet, but we will... ;)
// console.log(this) to see how it works
function toggle() {
  this.classList.toggle("active");
  const plusIcon = this.querySelector(".plus");
  const minusIcon = this.querySelector(".minus");

  if (plusIcon.style.display === "none" && minusIcon.style.display === "inline-block") {
    plusIcon.style.display = "inline-block";
    minusIcon.style.display = "none";
  } else {
    plusIcon.style.display = "none";
    minusIcon.style.display = "inline-block";
  }
  
  
}

// Selects an HTML element, and calls a function which will be executed when the element is clicked.
document.getElementById("section1").onclick = toggle;
document.getElementById("section2").onclick = toggle;
document.getElementById("section3").onclick = toggle;
document.getElementById("section4").onclick = toggle;





