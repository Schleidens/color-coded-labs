document.addEventListener('DOMContentLoaded', () => {
  //nav constant
  const navbarActionBtn = document.getElementById('navbarActionBtn');
  const navSection = document.getElementById('navSection');

  //navbar trigger btn
  navbarActionBtn.addEventListener('click', () => {
    navSection.classList.toggle('active');
  });

  //scroll top action btn
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  scrollToTopBtn.addEventListener('mouseover', () => {
    scrollToTopBtn.style.backgroundColor = 'pink';
  });
});

let placeholder = false;
const myFunc = async () => {
  try {
    placeholder = true;

    // lorem

    placeholder = false;
  } catch (error) {
    console.log(error);
  }
};
