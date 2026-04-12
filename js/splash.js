(function() {
    if (!document.documentElement.classList.contains('phase-welcome')) {
        return;
    }

    const splashHTML = `<div id="splash-screen"><div id="splash-welcome">Welcome</div></div>`;
    document.body.insertAdjacentHTML('afterbegin', splashHTML);
    document.body.style.visibility = 'visible';

    window.addEventListener('load', function() {
        setTimeout(function() {
            const splash = document.getElementById('splash-screen');
            if (splash) {
                splash.style.opacity = '0';
                
                // 关键修改：存入当前的时间戳
                localStorage.setItem('splash-timestamp', new Date().getTime());

                setTimeout(() => {
                    document.documentElement.classList.remove('phase-welcome');
                    splash.remove();
                }, 1000); 
            }
        }, 2500); 
    });
})();