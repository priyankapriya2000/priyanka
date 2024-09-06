// JavaScript Code
console.log("JavaScript is working!");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Implement touch gestures for better mobile experience
var projects = document.querySelectorAll('.project');

projects.forEach(project => {
    var hammer = new Hammer(project);
    hammer.on('swipeleft', function() {
        project.style.transform = 'translateX(-100px)';
    });
    hammer.on('swiperight', function() {
        project.style.transform = 'translateX(100px)';
    });
});
