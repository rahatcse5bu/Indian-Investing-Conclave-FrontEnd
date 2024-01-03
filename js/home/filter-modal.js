                // JavaScript for Modal Functionality
                const openModalDesktop = document.getElementById('search');
                const openModal = document.getElementById('btm-nav-search');
        const closeModal = document.getElementById('closeModal');
        const modal = document.getElementById('search-filter');

        openModal.addEventListener('click', function(){
            modal.classList.remove('hidden');
        });
        openModalDesktop.addEventListener('click', function(){
            modal.classList.remove('hidden');
        });

        closeModal.addEventListener('click', function(){
            modal.classList.add('hidden');
        });

        //end of modal 


        // This function will be called whenever a market-cap element is clicked
function toggleActiveClass(event) {
    // First, remove the bg-primaryColor class from all elements
    document.querySelectorAll('.market-cap').forEach(function(el) {
        el.classList.remove('bg-primaryColor');
    });
  
    // Then, add the bg-primaryColor class to the clicked element
    event.currentTarget.classList.add('bg-primaryColor');
}

// Add click event listener to each market-cap element
document.querySelectorAll('.market-cap').forEach(function(el) {
    el.addEventListener('click', toggleActiveClass);
});