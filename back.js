function Animation(selector, animationClass = 'animate', threshold = 0.4) {
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

Animation('#AndrewsInformation')





