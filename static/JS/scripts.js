


//

const element1 = document.getElementById('shop-kit');

const originalCont = element1.innerHTML;


element1.addEventListener('mouseover', function () {
  element1.innerHTML = 'Starter Kit<div class="circle"><span class="chevron"></span>';
});

element1.addEventListener('mouseout', function () {
  element1.innerHTML = originalCont;
});
// BUY NOW buttons
var elements = document.querySelectorAll('.add-to-cart-btn');
const eleme = document.getElementById('add-to-cart-btn3');
const originalContent = eleme.innerHTML;

elements.forEach(function (element) {
  element.addEventListener('mouseover', function () {
    element.textContent = "BUY NOW";
  });

  element.addEventListener('mouseout', function () {
    element.textContent = originalContent;
  });
});


// Back to top button
const backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
