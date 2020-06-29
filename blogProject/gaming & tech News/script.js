// Stick Navigation on Scroll 
$(window).on('scroll', () => {
    if($(window).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
});

// This is to Hide the Main Img when the CheckBox of the HamburgerMenu is Checked
// Also close the HamburgerMenu on click to "li a"
let btn = document.querySelector('#nav');
let mainImg = document.querySelector('.main-img');

btn.addEventListener('change', func = (e) => {
    if(btn.checked) {
        mainImg.style.display = "none";

    // Close after clicking on a li
    $('.nav-wrapper li a').on('click', function() {
        btn.checked = false;
    });

    } else {
        mainImg.style.display = "initial";
    }
});



// Smooth Scrolling animation
$('.nav-wrapper a').on('click', function (e){
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      },800);
  }
});