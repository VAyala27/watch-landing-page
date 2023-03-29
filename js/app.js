// Get modal element
var modal = document.querySelector("#simpleModal");

// Close Button
var closeBtn = document.querySelector(".closeBtn");

// Listen for outside click
window.addEventListener("click", outsideClick)

// Listen for close button
closeBtn.addEventListener("click", closeModal);

// Function to open modal
function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

const header = document.querySelector('#header');
window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0);
})


setTimeout(openModal, 5000);

    $(".navbar a").on("click", function(event) {
        if (this.hash !== "") {
          event.preventDefault();
      
          const hash = this.hash;
      
          $("html, body").animate(
            {
              scrollTop: $(hash).offset().top - 50
            },
            800
          );
        }
      });

    $(document).ready(function () {
        $('.testimonal-slider').slick({
            slidesToShow: 1,
            centerMode: false,
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            swipeToSlide: true,
            nextArrow: '<i class="fa fa-arrow-right"></i>',
            prevArrow: '<i class="fa fa-arrow-left"></i>',
        });
    });