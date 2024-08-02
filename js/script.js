window.addEventListener('scroll', function() {

    var scrollHeader = document.getElementById('scrollheader');

    if ( window.scrollY > 100 ){
        
        scrollHeader.classList.add('scrolled');

    } else{

        scrollHeader.classList.remove('scrolled');

    }

});