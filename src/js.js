

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementsByClassName('button-toggle');
    const menu = document.getElementsByClassName('toggle-list')
  
    button.addEventListener('click', function () {
      menu.classList.toggle('hidden');
    });
  
    // Close the dropdown when clicking outside
    document.addEventListener('click', function (event) {
      if (!button.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.add('hidden');
      }
    });
  });