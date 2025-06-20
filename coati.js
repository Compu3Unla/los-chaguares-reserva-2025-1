window.addEventListener('load', function() {


    const loaderWrapper = document.getElementById('loader-wrapper');
    const mainContent = document.getElementById('content');

 
    loaderWrapper.classList.add('hidden'); 

    loaderWrapper.addEventListener('transitionend', function() {
        loaderWrapper.style.display = 'none'; 
        if (mainContent) {
            mainContent.style.display = 'block'; 
        }
    });

});