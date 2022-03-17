const search=document.querySelector('.sticks'),
      container=document.querySelector('.input-container'),
      valueSearch=document.querySelector('.input')


search.addEventListener('click', (e) =>
{
  e.stopPropagation();
  e.preventDefault();
  container.blur();
});