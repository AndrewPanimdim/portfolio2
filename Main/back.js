
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
AnimationSlideInLeft('#Python')
AnimationSlideInLeft('#info1')


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



function initScrollAnimations(selector, animationClass = 'animate', threshold = 0.5) {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          observerInstance.unobserve(entry.target); // Animate only once
        }
      });
    }, { threshold });

    elements.forEach(el => observer.observe(el));
  }

  // Example usage for your boxes:
  initScrollAnimations('.backgroundinfo');
  initScrollAnimations('.overview');
  initScrollAnimations('.left_content');
  initScrollAnimations('.educationheader');
  initScrollAnimations('.backgroundheader');
  
  