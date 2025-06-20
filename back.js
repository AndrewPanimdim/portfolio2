
/*function for sliding up contents*/ 
function AnimationSlideUp(selector, animationClass = 'slideUp', threshold = 0.3) {
      const element = document.querySelectorAll(selector);
      const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            observerInstance.unobserve(entry.target);
          }
        });
      }, { threshold });
      element.forEach(el => observer.observe(el));
    }

AnimationSlideUp('#list')
AnimationSlideUp('#Container1')


/*function for sliding left contents*/ 

function AnimationSlideInLeft(selector, animationClass = 'slideLeft', threshold = 0.5) {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
        observerInstance.unobserve(entry.target);
      }
    });
  }, { threshold });
  elements.forEach(el => observer.observe(el));
}

AnimationSlideInLeft('#hello');
AnimationSlideInLeft('#furthermore')


/*navigation function*/

const projectsButton = document.getElementById('Projects');
const overlay1 = document.getElementById('overlay');

projectsButton.addEventListener('click', () => {
  // Toggle the visibility class on the overlay
  overlay1.classList.toggle('visible');
});


/*function for sliding right contents*/ 

function AnimationSlideInRight(selector, animationClass = 'slideRight', threshold = 0.5) {
  const elements = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
        observerInstance.unobserve(entry.target);
      }
    });
  }, { threshold });
  elements.forEach(el => observer.observe(el));
}

AnimationSlideInRight('#AndrewsInformation');



/*FUNCTION FOR THE OVERLAY  */
const overlay = document.getElementById('overlay');

window.addEventListener('scroll', () => {
  if(window.scrollY > 800) {
    overlay.classList.add('visible');
  } else {
    overlay.classList.remove('visible');
  }
})


/*function for language buttons */