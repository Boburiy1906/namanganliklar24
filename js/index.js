const elDemoModalOpener = document.querySelector(".site-notification-button");

const elDemoModal = document.querySelector(".site-modal");

elDemoModalOpener.addEventListener("click", function () {
  elDemoModal.classList.add("modal-open");
});
