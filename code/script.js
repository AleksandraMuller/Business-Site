
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


document.getElementById("section1").onclick = toggle;
document.getElementById("section2").onclick = toggle;
document.getElementById("section3").onclick = toggle;
document.getElementById("section4").onclick = toggle;





