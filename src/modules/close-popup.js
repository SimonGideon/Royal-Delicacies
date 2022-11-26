const closePopup = () => {
  const closeBtn = document.querySelector('.icone');
  const popUpDiv = document.querySelector('.popup-container');
  closeBtn.addEventListener('click', () => {
    popUpDiv.classList.add('hide');
  });
};

export default closePopup;
