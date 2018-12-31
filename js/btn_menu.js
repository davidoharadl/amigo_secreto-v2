const $menu = document.querySelector('.menu');
const $btnMenuOpen = document.querySelector('.btnMenu_open');
const $btnMenuClose = document.querySelector('.btnMenu_close');
const $itensAction = document.querySelectorAll('.menu-item-action')

$btnMenuOpen.addEventListener('click', function() {
  $menu.classList.add('menu_open');
});
$btnMenuClose.addEventListener('click', function() {
  $menu.classList.remove('menu_open');
});

$itensAction.forEach(function($itemAction){
  $itemAction.addEventListener("click", function(){
    $menu.classList.remove('menu_open');
  })
});

