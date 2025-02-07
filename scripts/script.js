const hamburger = document.getElementById( 'menu-toggle' );
const links  = document.getElementById( 'site-nav-links' );

hamburger.addEventListener( 'click', function() {
    links.classList.toggle('active');
    hamburger.classList.toggle('active');
});