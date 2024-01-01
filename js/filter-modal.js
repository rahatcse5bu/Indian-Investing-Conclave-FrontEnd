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