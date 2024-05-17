const pabloHappy = document.getElementById('s1On');
const pablosad = document.getElementById('s1Off');
const jorgeHappy = document.getElementById('s2On');
const jorgesad = document.getElementById('s2Off');
const javierHappy = document.getElementById('s3On');
const javiersad = document.getElementById('s3Off');
const texto = document.getElementById('text');

window.addEventListener('load', () => {
    if (localStorage.getItem('happypablo') === "true") {
        pabloHappy.checked = true;
    } else {
        pablosad.checked = true;
    };

    if (localStorage.getItem('happyjorge') === "true") {
        jorgeHappy.checked = true;
    } else {
        jorgesad.checked = true;
    };

    if (localStorage.getItem('happyjavier') === "true") {
        javierHappy.checked = true;
    } else {
        javiersad.checked = true;
    };
    console.log(texto);
    texto.innerHTML = localStorage.getItem('name') + " " + texto.innerHTML;
});

pabloHappy.addEventListener('click', function () {
    localStorage.setItem('happypablo', true);
});

pablosad.addEventListener('click', function () {
    localStorage.setItem('happypablo', false);
});

jorgeHappy.addEventListener('click', function () {
    localStorage.setItem('happyjorge', true);
});

jorgesad.addEventListener('click', function () {
    localStorage.setItem('happyjorge', false);
});

javierHappy.addEventListener('click', function () {
    localStorage.setItem('happyjavier', true);
});

javiersad.addEventListener('click', function () {
    localStorage.setItem('happyjavier', false);
});