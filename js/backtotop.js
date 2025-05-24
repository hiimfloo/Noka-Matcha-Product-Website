// Back to Top Button Functionality
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}


document.addEventListener('DOMContentLoaded', function() {
    var learnMoreButton = document.getElementById('learnMoreButton');
    
    if (learnMoreButton) {
        learnMoreButton.addEventListener('click', function(e) {
            e.preventDefault(); 
            
           
            window.location.href = this.getAttribute('href');
        });
    }
});