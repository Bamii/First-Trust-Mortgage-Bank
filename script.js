 $(document).ready(function(){
  $(".nav-tabs a").click(function(){
    $(this).tab('show');
  });
//      // Select all tabs
//    $('.nav-tabs a').click(function(){
//      $(this).tab('show');
//    })
//
//    // Select tab by name
//    $('.nav-tabs a[href="#home"]').tab('show')
//
//    // Select first tab
//    $('.nav-tabs a:first').tab('show')
//
//    // Select last tab
//    $('.nav-tabs a:last').tab('show')
//
//    // Select fourth tab (zero-based)
//    $('.nav-tabs li:eq(3) a').tab('show')
    
    //Header Dropdown
    $("#acct").click(function(){
        $(".account").slideToggle();
        $("header").css({"background-color": "#f7f7f7", "color" : "#54575C"});
    });
     
      $(".next_one").click(function(){
        $(".account").slideUp();
        $(".Loan").slideToggle();
        $("header").css({"background-color": "#f7f7f7", "color" : "#54575C"});
    });
     
    
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );
});


function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();