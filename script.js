const timeLine = gsap.timeline( {defaults: {ease: 'power1.out'} })
timeLine.to('.text', {y: '0%', duration: 1, stagger: .20});
timeLine.to('.slider', {y: '100%', duration: 1.3, delay: .5});
timeLine.to('.intro', {y: '-100%', duration: 1}, '-=1');
timeLine.fromTo('nav', {opacity:0}, {opacity: 1, duration: 1.5});
timeLine.fromTo('.big-text', {opacity:0}, {opacity: 1, duration: 1.5}, '-=1');
