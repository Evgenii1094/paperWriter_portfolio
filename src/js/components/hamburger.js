const hamburgerMenu = () => {
    const hamburgerBtn = document.querySelector('.header__hamburger'),
          header = document.querySelector('.header'),
          overlay = document.querySelector('.overlay');

    hamburgerBtn.addEventListener('click', () => {
        header.classList.toggle('is-opened');

        if (header.classList.contains('is-opened')) {
            document.body.style.overflow = 'hidden';
            overlay.style.display = 'block';
        } else {
            document.body.style.overflow = '';
            overlay.style.display = 'none';
        }
    });
}

export default hamburgerMenu;
