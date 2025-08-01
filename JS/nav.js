const button = document.getElementById('mobile-menu');
const div = document.getElementById('menu-content');

button.addEventListener('click', function() {
    if (div.classList.contains('menu-open')) {
        div.classList.remove('menu-open');
        button.classList.remove('menu-open');
        button.textContent = '☰';
    } else {
        div.classList.add('menu-open');
        button.classList.add('menu-open');
        button.textContent = '⨯';
    }
});

const divlistbuttons = document.getElementsByClassName('link');

for (let i = 0; i < divlistbuttons.length; i++) {
  const button = divlistbuttons[i];

  button.addEventListener('click', function() {
    const targetDivId = this.id + 'div';
    const targetDiv = document.getElementById(targetDivId);

    if (this.classList.contains('open')) {
      targetDiv.classList.remove('open');
      this.classList.remove('open');
    } else {
      targetDiv.classList.add('open');
      this.classList.add('open');
    }
  });
}