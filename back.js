function AnimationSlideUp(selector, animationClass = 'slideUp', threshold = 0.5) {
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

AnimationSlideUp('#furthermore')


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