function toggleMoreText() {
    var moreText = document.getElementById("moreText");
    var btnText = document.getElementById("myBtn");

    if (moreText.style.display === "none") {
      moreText.style.display = "block";
      btnText.innerHTML = "Read Less";
    } else {
      moreText.style.display = "none";
      btnText.innerHTML = "Read More";
    }
  }
