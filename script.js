document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion-btn");
  accordions.forEach(btn => {
    btn.addEventListener("click", function () {
      const content = this.nextElementSibling;
      document.querySelectorAll(".accordion-content").forEach(c => {
        if (c !== content) c.style.maxHeight = null;
      });
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        this.classList.remove("active");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        this.classList.add("active");
      }
    });
  });
});

document.querySelectorAll(".adm-accordion-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        let content = btn.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});
