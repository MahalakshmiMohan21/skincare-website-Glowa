const image = document.getElementById('ad-image');
const ingredients = document.getElementById('ingredient-section');


    
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY <= 300) {
    image.style.left = '100px';
    image.style.top = '150px';
  } else if (scrollY > 300 && scrollY <= 500) {
    image.style.left = '820px';
    image.style.top = '620px';
  } else if (scrollY > 500) {
    image.style.left = '100px';
    image.style.top = '1280px'; 
  }
});


    window.addEventListener("scroll", function () {
      const section = document.getElementById("benefits-section");
      const sectionTop = section.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;
  
      if (sectionTop < screenHeight) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });

    
    image.addEventListener('click', () => {
      ingredients.classList.toggle('active');
    });