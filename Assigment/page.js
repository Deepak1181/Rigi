const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  //Showing drop-down menu
  let navBar = document.querySelector(".navbar");
  navBar.classList.toggle("join-community");

  //Changing Hamburger into cross
  document.querySelector("#line1").classList.toggle("line1");
  document.querySelector("#line2").classList.toggle("line2");
  document.querySelector("#line3").classList.toggle("line3");
});

/* Service Section tab functionality */

// const tabs = document.querySelectorAll(".sectionBtn");
// const allSections = document.querySelectorAll(".section");

// tabs.forEach((tab, index) => {
//   tab.addEventListener("click", () => {
//     tabs.forEach((tab) => tab.classList.remove("activeBtn"));
//     tab.classList.add("activeBtn");

//     allSections.forEach((section) => {
//       section.classList.remove("active");
//     });
//     allSections[index].classList.add("active");
//   });
// });