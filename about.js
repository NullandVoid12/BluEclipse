// Responsive navigation for burger menu

document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger-icon');
  const navOverlay = document.getElementById('myNav');
  const closeBtn = document.getElementById('closebtn');

  if (burger && navOverlay && closeBtn) {
    burger.addEventListener('click', function () {
      navOverlay.style.width = '100%';
    });
    closeBtn.addEventListener('click', function () {
      navOverlay.style.width = '0%';
    });
  }
});

// UI interaction for the main content (optional, keep if you want the animated list effect)

document.addEventListener('DOMContentLoaded', function () {
  // Only target the product list, not all <ul>
  const list = document.querySelector('ul.product-list');
  if (!list) return;
  const items = list.querySelectorAll('li');
  const setIndex = (event) => {
    const closest = event.target.closest('li');
    if (closest) {
      const index = [...items].indexOf(closest);
      const cols = new Array(list.children.length)
        .fill()
        .map((_, i) => {
          items[i].dataset.active = (index === i).toString();
          return index === i ? '10fr' : '1fr';
        })
        .join(' ');
      list.style.setProperty('grid-template-columns', cols);
    }
  };
  list.addEventListener('focus', setIndex, true);
  list.addEventListener('click', setIndex);
  list.addEventListener('pointermove', setIndex);
  const resync = () => {
    const w = Math.max(
      ...[...items].map((i) => {
        return i.offsetWidth;
      })
    );
    list.style.setProperty('--article-width', w);
  };
  window.addEventListener('resize', resync);
  resync();
});

console.clear();

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById('mobile-burger');
  const nav = document.getElementById('navLinks');

  burger.addEventListener('click', function () {
    nav.classList.toggle('active');
    burger.classList.toggle('open');
  });
});
$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );

function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.getElementById("mobile-burger").style.zIndex = "1";
  document.getElementById("myNav").style.zIndex = "2";
  
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}