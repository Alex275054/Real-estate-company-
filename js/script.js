//>=============================================================================================================================
// Инициализируем Swiper
new Swiper('.show-slider', {
   // Стрелки
   navigation: {
      nextEl: '.swiper-button-r',
      prevEl: '.swiper-button-l'
   },
   // Навигация 
   // Буллеты, текущее положение, прогрессбар
   // pagination: {
   //    el: '.swiper-pagination',
   //    // Буллеты
   //    type: 'bullets',
   //    clickable: true,
   // },
   // Управление клавиатурой
   keyboard: {
      // Включить\выключить
      enabled: true,
      // Включить\выключить
      // только когда слайдер
      // в пределах вьюпорта
      onlyInViewport: true,
      // Включить\выключить
      // управление клавишами
      // pageUp, pageDown
      pageUpDown: true,
   },
   // Управление колесом мыши
   mousewheel: {
      // Чувствительность колеса мыши
      sensitivity: 1,
      // Класс объекта на котором
      // будет срабатывать прокрутка мышью.
      //eventsTarget: ".testimonial-slider"
   },
   // Автовысота
   // autoHeight: false,
   // Количество слайдов для показа
   slidesPerView: 1.5,
   // Отступ между слайдами
   spaceBetween: 30,
   // Количество пролистываемых слайдов
   // slidesPerGroup: 1,
   // Скорость
   // speed: 800,
   // Бесконечный слайдер
   loop: true,
   // Responsive breakpoints
   breakpoints: {
      // when window width is >= 220px
      220: {
         slidesPerView: 1,
         spaceBetween: 20
      },
      // when window width is >= 992px
      992: {
         slidesPerView: 1.5,
         spaceBetween: 30
      },
      // when window width is >= 410px
      // 767: {
      //    slidesPerView: 2,
      //    spaceBetween: 30
      // },
   },
   // Скролл
   scrollbar: {
      el: '.swiper-scrollbar',
      // Возможность перетаскивать скролл
      draggable: true
   },
});
new Swiper('.members-slider', {
   // Управление клавиатурой
   keyboard: {
      // Включить\выключить
      enabled: true,
      // Включить\выключить
      // только когда слайдер
      // в пределах вьюпорта
      onlyInViewport: true,
      // Включить\выключить
      // управление клавишами
      // pageUp, pageDown
      pageUpDown: true,
   },
   // Управление колесом мыши
   mousewheel: {
      // Чувствительность колеса мыши
      sensitivity: 1,
      // Класс объекта на котором
      // будет срабатывать прокрутка мышью.
      //eventsTarget: ".testimonial-slider"
   },
   // Автовысота
   // autoHeight: true,
   // Количество слайдов для показа
   slidesPerView: 3,
   // Отступ между слайдами
   spaceBetween: 15,
   // Количество пролистываемых слайдов
   slidesPerGroup: 1,
   // Скорость
   // speed: 800,
   // Бесконечный слайдер
   loop: true,
   // Responsive breakpoints
   breakpoints: {
      // when window width is >= 220px
      220: {
         slidesPerView: 1,
         spaceBetween: 20
      },
      // when window width is >= 767px
      767: {
         slidesPerView: 2,
         spaceBetween: 30
      },
      // when window width is >= 992px
      992: {
         slidesPerView: 3,
         spaceBetween: 30
      },
   },
   centeredSlides: false,
});
new Swiper('.see-slider', {
   // Стрелки
   navigation: {
      nextEl: '.swiper-button-r',
      prevEl: '.swiper-button-l'
   },
   // Управление клавиатурой
   keyboard: {
      // Включить\выключить
      enabled: true,
      // Включить\выключить
      // только когда слайдер
      // в пределах вьюпорта
      onlyInViewport: true,
      // Включить\выключить
      // управление клавишами
      // pageUp, pageDown
      pageUpDown: true,
   },
   // Управление колесом мыши
   mousewheel: {
      // Чувствительность колеса мыши
      sensitivity: 1,
      // Класс объекта на котором
      // будет срабатывать прокрутка мышью.
      //eventsTarget: ".testimonial-slider"
   },
   // Автовысота
   // autoHeight: false,
   // Количество слайдов для показа
   slidesPerView: 4,
   // Отступ между слайдами
   spaceBetween: 30,
   // Количество пролистываемых слайдов
   // slidesPerGroup: 1,
   // Скорость
   // speed: 800,
   // Бесконечный слайдер
   loop: true,
   // Responsive breakpoints
   breakpoints: {
      // when window width is >= 200px
      200: {
         slidesPerView: 1,
         spaceBetween: 20
      },
      // when window width is >= 400px
      400: {
         slidesPerView: 2,
         spaceBetween: 20
      },
      // when window width is >= 410px
      767: {
         slidesPerView: 3,
         spaceBetween: 30
      },
      // when window width is >= 992px
      992: {
         slidesPerView: 4,
         spaceBetween: 30
      },
   },
   // Скролл
   scrollbar: {
      el: '.swiper-scrollbar',
      // Возможность перетаскивать скролл
      draggable: true
   },
});
//>=============================================================================================================================