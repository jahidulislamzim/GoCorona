
document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide', {
    classes: {
      pagination: 'splide__pagination currentPage',
      page      : 'splide__pagination__page pageClass',
    },
    type   : 'loop',
    perPage: 1,
    autoplay:true,
    interval:2000,
  });
  splide.mount();
} );
