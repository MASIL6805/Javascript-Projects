 const toggleBtn = document.querySelector('.sidebar-toggle');
 const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');


toggleBtn.addEventListener('click', function () {
// JUST TO CHHECK WHICH CLASSES ARE PRESENT IN THE SIDEBAR
    console.log(sidebar.classList);
    
    //   if (sidebar.classList.contains('show-sidebar')) {
        //     sidebar.classList.remove('show-sidebar');
        //   }
        //   else {
            //     sidebar.classList.add('show-sidebar');
            //   }



            sidebar.classList.toggle('show-sidebar');
});


closeBtn.addEventListener('click', function () {
    sidebar.classList.remove('show-sidebar');
});