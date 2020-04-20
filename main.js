let checkbox = document.querySelector('.checkbox');
let head = document.head;
let link = document.createElement('link');

link.rel = 'stylesheet';
if(localStorage.getItem('themeStyle') === 'dark') {
  link.href = 'dark-theme.css';
  checkbox.setAttribute('checked', true);
}
else {
link.href = 'light-theme.css';
  }
head.appendChild(link);


checkbox.addEventListener('change', function changeTheme() {
  if (checkbox.checked) {
    link.href = 'dark-theme.css';
    localStorage.setItem('themeStyle', 'dark')
  }
  else {
    link.href = 'light-theme.css';
    localStorage.setItem('themeStyle', 'light')
  }
})
