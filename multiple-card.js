let cardGroup = document.querySelectorAll(".card-group");
let activeIndex = 0;
//Handle next state
function handleNext() {
  let nextIndex = activeIndex + 1 <= cardGroup.length - 1 ? activeIndex + 1 : 0;
  let currentGallery = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGallery = document.querySelector(`[data-index="${nextIndex}"]`);

  currentGallery.dataset.status = "after";
  // Next Gallery Status Updating
  nextGallery.dataset.status = "become-active-from-before";
  setTimeout(() => {
    nextGallery.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

//Handle Previous State
function handlePrevious() {
  let nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : cardGroup.length - 1;
  let currentGallery = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGallery = document.querySelector(`[data-index="${nextIndex}"]`);

  currentGallery.dataset.status = "before";
  // Next Gallery Status Updating
  nextGallery.dataset.status = "become-active-from-after";
  setTimeout(() => {
    nextGallery.dataset.status = "active";
    activeIndex = nextIndex;
  });
}
