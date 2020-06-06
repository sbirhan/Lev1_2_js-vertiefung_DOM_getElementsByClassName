function myFunction() {
    var x = document.querySelectorAll(".example");
    for (let i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "black";
      x[i].style.color = "white";
    }
}