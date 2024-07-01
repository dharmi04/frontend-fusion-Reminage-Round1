document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.createElement('div');
  cursor.classList.add('cursor');
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  });

  const navbarLinks = document.querySelectorAll('.navbar-link');
  const navbarButtons = document.querySelectorAll('.navbar-button');

  navbarLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(6)';
      cursor.style.opacity = 1;
    });

    link.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.opacity = 0;
    });
  });

  navbarButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(6)';
      cursor.style.opacity = 1;
    });

    button.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.opacity = 0;
    });
  });
});
