console.clear();


const cardsContainer = document.querySelector(".cards");
const cardsContainerInner = document.querySelector(".cards__inner");
const cards = Array.from(document.querySelectorAll(".cards__card"));
const overlay = document.querySelector(".overlay");

const applyOverlayMask = (e) => {
  const overlayEl = e.currentTarget;
  const x = e.pageX - cardsContainer.offsetLeft;
  const y = e.pageY - cardsContainer.offsetTop;

  overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
};

const createOverlayCta = (overlayCard, ctaEl) => {
  const overlayCta = document.createElement("div");
  overlayCta.classList.add("cta");
  overlayCta.textContent = ctaEl.textContent;
  overlayCta.setAttribute("aria-hidden", true);
  overlayCard.append(overlayCta);
};

const observer = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    const cardIndex = cards.indexOf(entry.target);
    let width = entry.borderBoxSize[0].inlineSize;
    let height = entry.borderBoxSize[0].blockSize;

    if (cardIndex >= 0) {
      overlay.children[cardIndex].style.width = `${width}px`;
      overlay.children[cardIndex].style.height = `${height}px`;
    }
  });
});

const initOverlayCard = (cardEl) => {
  const overlayCard = document.createElement("div");
  overlayCard.classList.add("card");
  createOverlayCta(overlayCard, cardEl.lastElementChild);
  overlay.append(overlayCard);
  observer.observe(cardEl);
};

cards.forEach(initOverlayCard);
document.body.addEventListener("pointermove", applyOverlayMask);

document.addEventListener('DOMContentLoaded', function() {  // Ensures the page is loaded before we attach any event

  // Get all "Generate Quote" buttons
  const generateQuoteButtons = document.querySelectorAll('.card__cta');

  // Get the checkbox-group
  const checkboxGroup = document.querySelector('.checkbox-group');
  
  // Initially hide the checkboxGroup
  checkboxGroup.style.display = 'none';

  // Add click event to each "Generate Quote" button
  generateQuoteButtons.forEach(button => {
      button.addEventListener('click', function(e) {
          e.preventDefault();  // prevent default behavior of <a> tag.
          checkboxGroup.style.display = checkboxGroup.style.display === 'none' ? 'flex' : 'none';
      });
  });
});

const headLine = new SplitType('h1')
const myText2 = new SplitType('p', {charClass:'char2'})
var tl = gsap.timeline({defaults: {ease: "Expo.easeInOut"}})

tl.from('.char', {
    y: -100,
    stagger: 0.05,
    delay: 1
})
.from('.char2', {
    y: -100,
    stagger: 0.05,
    duration: .6
}, "-=1.2")
.to('h1,p', {
    y: 130,
    delay: .4,
    duration: 1.4
})