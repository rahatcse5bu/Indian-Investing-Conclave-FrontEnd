$(document).ready(function() {
    $('.toggle').click(function() {
      // Assuming the list is the next sibling
      $(this).next('ul').slideToggle();
    });
  });
  