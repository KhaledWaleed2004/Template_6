// SCROLLER ANIM
let el = document.getElementById("scroller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});

// GO TO UP
function goUpTo() {
  let goUp = document.getElementById("goUp");

  window.addEventListener("scroll", () => {
    goUp.style.display = window.scrollY >= 700 ? "block" : "none";
  });

  goUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// FULL ANIM
let ourSkills = document.getElementById("our-skills");
let spans = document.querySelectorAll(".the-progress span");

window.addEventListener("scroll", () => {
  if (window.scrollY >= ourSkills.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});

// STATS SECTION
let nums = document.querySelectorAll(".stats .number");
let section = document.getElementById("stats");
let started = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= section.offsetTop && !started) {
    nums.forEach((num) => startCount(num));
    started = true;
  }
});

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// EVENT SECTION
let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
}, 1000);
