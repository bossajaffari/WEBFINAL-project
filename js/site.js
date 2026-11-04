const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('#nav-list');

if (menuToggle && navList) {
  const menuLabel = menuToggle.querySelector('.sr-only');

  menuToggle.addEventListener('click', () => {
    const menuIsExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!menuIsExpanded));
    navList.classList.toggle('open', !menuIsExpanded);

    if (menuLabel) {
      menuLabel.textContent = menuIsExpanded ? 'Open navigation' : 'Close navigation';
    }
  });
}

const urgency = document.querySelector('#urgency');
const urgencyOutput = document.querySelector('#urgency-output');
const urgencyLabels = ['Not urgent', 'Within a week', 'Soon', 'Within 24 hours', 'As soon as possible'];

if (urgency && urgencyOutput) {
  urgency.addEventListener('input', () => {
    urgencyOutput.value = urgencyLabels[Number(urgency.value) - 1];
  });
}

const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameValue = new FormData(contactForm).get('name');
    const name = typeof nameValue === 'string' ? nameValue.trim() : '';
    formStatus.textContent = `Thanks, ${name}. Your enquiry is ready for review. This demo does not send or store messages.`;
  });
}