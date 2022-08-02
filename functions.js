let acc = document.querySelectorAll(".accordion");
console.log(acc);

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.classList.remove("active");
      this.style.borderBottom = "1px solid rgba(0, 0, 0, 0.2)";
      panel.style.borderBottom = "1px solid white";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.borderBottom = "1px solid rgba(0, 0, 0, 0.2)";
      this.style.borderBottom = "1px solid white";
    }
  });
}

const sections = document.querySelectorAll(".screen");
console.log(sections);

const quick = document.querySelectorAll(".accor__items a ");
console.log(quick);

const config = {
  // rootMargin: "-50px 0px -55%",
  rootMargin: "0px 0px -900px 0px",
  threshold: 0.1,
};

let observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    console.log("entries", entries);
    if (entry.isIntersecting) {
      const sectionId = entry.target.id;

      quick.forEach((en) => {
        en.classList.remove("col");
        let quickId = en.name;
        let quickClass = en.className;
        console.log(quickClass);

        //observer.unobserve(entry.target);
        if (sectionId === quickId) {
          console.log(sectionId + " and " + quickId + " are equal now");
          en.classList.add("col");
        } else {
          en.classList.remove("col");
        }
      });
    }
  });
}, config);

sections.forEach((section) => {
  observer.observe(section);
});

// function intersectionHandler(entry) {
//   const id = entry.target.id;
//   console.log(id);
//   //   const currentlyActive = document.querySelector(".screen.active");
//   //    const shouldBeActive = document.querySelector("nav li[data-ref=" + id + "]");

//   //     if (currentlyActive) {
//   //       currentlyActive.classList.remove("quick__active");
//   //     }
//   //     if (shouldBeActive) {
//   //       shouldBeActive.classList.add("quick__active");
//   //     }
// }

quick.forEach(function (link) {
  link.classList.remove("col");
  link.addEventListener("click", function () {
    if (link.classList.contains("col")) {
    } else {
      link.style.color = "black";
    }
  });
});

function getYPosition() {
  var top = window.pageYOffset || document.documentElement.scrollTop;
  console.log(top);
}

window.addEventListener("scroll", getYPosition);
