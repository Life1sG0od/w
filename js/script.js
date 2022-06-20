$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

new Swiper('.swiper', {

  // Стартовый слайд.
  initialSlide: 1,
  // Количество пролистываемых слайдов
  slidesPerGroup: 1,
  keyboard: {
    // Включить\выключить
    enabled: true,
    // Включить\выключить
    // только когда слайдер
    // в пределах вьюпорт
    onlyInVieport: true,
    // Включить/выключить
    // управление клавишами
    // pageUp, pageDown
    pageUpDown: true,
  },
    // Переключение при клике на слайд
    slideToClickedSlide: true,
    
    pagination: {
      el: '.swiper-pagination',
          // Буллеты
          clickable: true,
    },
    // Курсор перетаскивания
  grabCursor: true,
});
// создаём элемент <div>, который будем перемещать вместе с указателем мыши пользователя
var mapTitle = document.createElement('div'); mapTitle.className = 'mapTitle';
// вписываем нужный нам текст внутрь элемента
mapTitle.textContent = 'Для активации карты нажмите по ней';
// добавляем элемент с подсказкой последним элементов внутрь нашего <div> с id wrapMap
wrapMap.appendChild(mapTitle);
// по клику на карту
wrapMap.onclick = function() {
    // убираем атрибут "style", в котором прописано свойство "pointer-events"
    this.children[0].removeAttribute('style');
    // удаляем элемент с интерактивной подсказкой
    mapTitle.parentElement.removeChild(mapTitle);
}
// по движению мыши в области карты
wrapMap.onmousemove = function(event) {
    // показываем подсказку
    mapTitle.style.display = 'block';
    // двигаем подсказку по области карты вместе с мышкой пользователя
    if(event.offsetY > 10) mapTitle.style.top = event.offsetY + 20 + 'px';
    if(event.offsetX > 10) mapTitle.style.left = event.offsetX + 20 + 'px';
}
// при уходе указателя мыши с области карты
wrapMap.onmouseleave = function() {
    // прячем подсказку
    mapTitle.style.display = 'none';
}