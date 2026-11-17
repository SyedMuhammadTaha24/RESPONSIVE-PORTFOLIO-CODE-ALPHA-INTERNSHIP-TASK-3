
// 1. Mobile Navigation Toggle

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {

    navLinks.classList.toggle('show');

    const isExpanded = navLinks.classList.contains('show');

    menuToggle.setAttribute('aria-expanded', isExpanded);

});


// 2. Close Mobile Menu When a Link Is Clicked

document.querySelectorAll('.nav-links a').forEach(link => {

    link.addEventListener('click', () => {

        navLinks.classList.remove('show');

        menuToggle.setAttribute('aria-expanded', 'false');

    });

});


// 3. Highlight Active Navigation Link on Scroll

const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

function updateActiveNavLink() {

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            currentSection = section.getAttribute('id');

        }

    });

    navItems.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') === `#${currentSection}`) {

            link.classList.add('active');

        }

    });

}

window.addEventListener('scroll', updateActiveNavLink);

updateActiveNavLink();


// 4. Contact Form Handling

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {

        formStatus.textContent =
            `Thank you, ${name}! Your message has been submitted successfully.`;

        contactForm.reset();

        setTimeout(() => {

            formStatus.textContent = '';

        }, 5000);

    }

});
