function mudaTema() {
  document.body.classList.toggle("dark");
}

let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//arrumar click

const buttons = document.querySelectorAll("#btn1, #btn2, #btn3");

for (const btn of buttons) {
  btn.addEventListener("click", function handleClick() {
    btn.classList.toggle("clicked");
  });
}

// document.addEventListener("click", function handleClick(event) {
//   event.target.classList.toggle("clicked");
// });