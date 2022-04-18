//Function to toggle the mobile navigation on and off

function myFunction() {
    var drplinks = document.getElementById("dropdownlinks");
    if (drplinks.style.display === "flex") {
      drplinks.style.display = "none";
    } else {
      drplinks.style.display = "flex";
    }
  }