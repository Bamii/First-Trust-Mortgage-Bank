 $(document).ready(function(){
  $(".nav-tabs a").click(function(){
    $(this).tab('show');
  });

      $(window).scroll(function(){
            if ($(window).scrollTop() >= 120) {
                $('.header').addClass('sticky');
                
            }
            else {
                $('.header').removeClass('sticky');
                
            }
        });
     
      $(window).scroll(function(){
            if ($(window).scrollTop() >= 120) {
                $('header').addClass('fixed-header');
                
            }
            else {
                $('header').removeClass('fixed-header');
                
            }
        });
    //Header Dropdown
     $(".drop").click(function(){
         $(".drop").slideUp();
         $("header").addClass("back_down");
     });
    $("#acct").hover(function(){
        $(".savings").slideUp();
        $(".media").slideUp();
        $(".investor").slideUp();
        $(".about-us").slideUp();
        $(".Loan").slideUp();
        $(".account").delay(300).slideDown();
        $("header").addClass("hovered");
        $(".hide").css({"display": "inline-block"});
        $(".show").css({"display": "none"});
    });
     
     
     //Next dropdown
    $("#loan").hover(function(){
        $(".account").slideUp();
        $(".savings").slideUp();
        $(".media").slideUp();
        $(".investor").slideUp();
        $(".about-us").slideUp();
        $(".Loan").delay(500).slideDown();
       $("header").addClass("hovered");
        $(".hide").css({"display": "inline-block"});
        $(".show").css({"display": "none"});
    });
     
     
     //Next dropdown
       $("#saving").hover(function(){
        $(".account").slideUp();
        $(".Loan").slideUp();
        $(".media").slideUp();
        $(".investor").slideUp();
        $(".about-us").slideUp();
        $(".savings").delay(500).slideDown();
        $("header").addClass("hovered");
        $(".hide").css({"display": "inline-block"});
        $(".show").css({"display": "none"});
    });
     
    $("#about").hover(function(){
        $(".account").slideUp();
        $(".Loan").slideUp();
        $(".savings").slideUp();
        $(".media").slideUp();
        $(".investor").slideUp();
        $(".about-us").delay(500).slideToggle()
        $("header").addClass("hovered");
        $(".hide").css({"display": "inline-block"});
        $(".show").css({"display": "none"});
    });
     
     $("#media").hover(function(){
        $(".account").slideUp();
        $(".Loan").slideUp();
        $(".savings").slideUp();
        $(".media").delay(500).slideDown();
        $(".investor").slideUp();
        $(".about-us").slideUp();
        $("header").addClass("hovered");
        $(".hide").css({"display": "inline-block"});
         $(".show").css({"display": "none"});
    });
     
    $("#investor").hover(function(){
        $(".account").slideUp();
        $(".Loan").slideUp();
        $(".savings").slideUp();
        $(".media").slideUp();
        $(".investor").delay(500).slideDown();
        $(".about-us").slideUp();
        $("header").addClass("hovered");
        $(".hide").css({"display": "inline-block"});
        $(".show").css({"display": "none"});
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

//Banner background image slide show
 var folder = "";
 var pictures=["images/Family-II.png", "images/5d759496aed63.png", "images/realty%20Finance.jpg", "images/Savings.jpg"];
 var num = 0;
          
    function main(){
       var slider = document.getElementById("section");
           if (num == 3) num = 0;
		   else num++;
           
            slider.style.backgroundImage = "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url("+pictures[num]+")"  ;
        }
            
        setInterval('main()', 3000);


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