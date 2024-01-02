
document.addEventListener('DOMContentLoaded', function () {
    // alert('ghwvgh')
    var el = document.querySelector('.tailwind-choices');
    var choices = new Choices(el, {
        searchEnabled: true,
        removeItemButton: true,
        shouldSort: false,
    });
    var searchResults = document.querySelector('.speaker-search-result');
    // console.log("before"+searchResults);
el.addEventListener('change', function() {
    // alert(choices.getValue(true));
    var selectedValues = choices.getValue(true); // Get selected values
    // console.log("after"+searchResults);
    // Clear the current content
    searchResults.innerHTML = '';

    // Iterate over selected values and append new elements
    selectedValues.forEach(function(value) {
        var div = document.createElement('div');
        div.className = 'speaker flex flex-row items-center justify-center bg-primaryColor text-center px-2 py-2 rounded-3xl';
        div.innerHTML = '<img src="../../assets/home/people.png" class="mr-1" alt=""/> <div class="text-xs md:text-md">' + value + '</div>';
        searchResults.appendChild(div);
    });
});

});