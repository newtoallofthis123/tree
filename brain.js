window.onload = function() {
    Particles.init({
        selector: '.body',
        maxParticles: 250,
        color: '#fff',
        speed: '1',
    });
    }; 
Toastify({
    text: "Follow Me on Twitter for Latest Updates",
    duration: 30000,
    destination: "https://twitter.com/noobscience1",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    avatar: "assets/images/twitter.svg",
    style: {
        background: "linear-gradient(to right, #0e2a47, #0e2a36",
    },
    onClick: function(){} // Callback after click
}).showToast();
Toastify({
    text: "Support Me by Forking my Projects on GitHub",
    duration: 30000,
    destination: "https://github.com/newtoallofthis123",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    avatar: "assets/images/github.svg",
    style: {
        background: "linear-gradient(to right, #0e2a47, #0e2a36",
    },
    onClick: function(){} // Callback after click
}).showToast();