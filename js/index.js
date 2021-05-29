const posting = document.querySelector("#posting__container");
const posting__button = document.querySelector("#posting__button");
const show__postingBtn = document.querySelector("#show__posting");

const showPosting = () => {
  posting.classList.toggle("show");
};

show__postingBtn.addEventListener("click", showPosting);
