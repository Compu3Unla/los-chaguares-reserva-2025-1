window.addEventListener('load', function() {
    const loaderWrapper = document.getElementById('loader-wrapper');
    const mainContent = document.getElementById('content');

    const minDisplayTime = 1000; 

    const loadTime = Date.now();

    function hideLoaderAndShowContent() {
        loaderWrapper.classList.add('hidden');


        loaderWrapper.addEventListener('transitionend', function() {
            loaderWrapper.style.display = 'none'; 
            if (mainContent) {
                mainContent.style.display = 'block'; 
            }
        }, { once: true }); 
    }

    const timeElapsed = Date.now() - loadTime;


    if (timeElapsed < minDisplayTime) {
        const remainingTime = minDisplayTime - timeElapsed;
        setTimeout(hideLoaderAndShowContent, remainingTime);
    } else {

        hideLoaderAndShowContent();
    }
});
