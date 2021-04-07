// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // ages 18-24
  age20: function() {
    var age = $(this).find('.age').text();
    return age.match( 'age <= 24' )
  },
  // show if gender is female
  female: function() {
    var name = $(this).find('.gender').text();
    return name.match( /femme$/ );
  },
  nb: function() {
    var name = $(this).find('.gender').text();
    return name.match( /nb$/ );
  },
    // show if gender is female
  male: function() {
    var name = $(this).find('.gender').text();
    return name.match( /homme/ );
  }
};

// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
