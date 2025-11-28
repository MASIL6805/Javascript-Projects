// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
    //to check if the class is present with random name
    //console.log(links.classList.contains('random'));



    // using if else statement to toggle the menu bar
    // if (links.classList.contains('show-links')) {
    //     links.classList.remove('show-links');
    // }
    // else {
    //     links.classList.add('show-links');
    // }


// using toggle method to toggle the menu bar instead of if else long statement  
    links.classList.toggle('show-links');
});