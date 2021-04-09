

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
  male: function() {
    var name = $(this).find('.gender').text();
    return name.match( /homme/ );
  },
    model: function() {
    var name = $(this).find('.profession').text();
    return name.match( /model$/ );
  },

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

      const toggleColorMode = e => {
        //switch to Light Mode
        if (e.currentTarget.classList.contains("dark--hidden")) {
          //sets the custom html attribute 
          document.documentElement.setAttribute("color-mode", "dark");
          //sets the user's preference in local storage 
          localStorage.setItem("color-mode", "dark");
          return;
        }
        /* switch to dark mode
        sets the custom hrml attribute */
        document.documentElement.setAttribute("color-mode", "light");
        // sets the user's preference in local storage 
        localStorage.setItem("color-mode", "light");
      };
      //get the buttons in the dom
      const toggleColorButtons = document.querySelectorAll(".color-mode__btn");
      // set up even listeners 
      toggleColorButtons.forEach(btn => {
        btn.addEventListener("click", toggleColorMode);
      });
      // save the color mode 
      if (
        localStorage.getItem('color-mode') === 'light' ||
        (window.matchMedia('(prefers-color-scheme: light)').matches &&
          !localStorage.getItem('color-mode'))
      ) {
        document.documentElement.setAttribute('color-mode', 'light')
      };


