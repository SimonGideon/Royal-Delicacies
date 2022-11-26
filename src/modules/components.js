const mealList = document.querySelector('#meals-content');
const popup = document.querySelector('.popup-main-container');
const contact = document.querySelector('.contact');
const contactContainer = document.querySelector('.contact-container');
const availableFood = document.querySelector('.available-food');

contact.addEventListener('click', () => {
  mealList.classList.add('hide');
  contactContainer.classList.add('show');
  contactContainer.classList.add('contact-container');
});

availableFood.addEventListener('click', () => {
  mealList.classList.remove('hide');
  contactContainer.classList.add('hide');
});

document.addEventListener('DOMContentLoaded', () => {
  contactContainer.classList.add('hide');
});

export { mealList, popup, contact, contactContainer };
