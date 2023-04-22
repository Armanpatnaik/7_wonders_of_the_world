const toggle = document.getElementById('toggleDark');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    var body = document.getElementsByTagName("BODY")[0];
    var css = document.getElementById("mode");
    if (css.getAttribute("href") == "light.css") {
      css.href = "dark.css";
      body.classList.add("dark-mode");
      body.classList.remove("light-mode");
    } else {
      css.href = "light.css";
      body.classList.add("light-mode");
      body.classList.remove("dark-mode");
    }
});


const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".video-slide");
    const contents = document.querySelectorAll(".content");

    var sliderNav = function(manual){
      btns.forEach((btn) => {
        btn.classList.remove("active");
      });

      slides.forEach((slide) => {
        slide.classList.remove("active");
      });

      contents.forEach((content) => {
        content.classList.remove("active");
      });

      btns[manual].classList.add("active");
      slides[manual].classList.add("active");
      contents[manual].classList.add("active");
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        sliderNav(i);
      });
    });
