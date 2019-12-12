 $(document).ready(function(){
  $(".nav-tabs a").click(function(){
    $(this).tab('show');
  });

  $(".fa-bars").click(function(){
    $(".modal-content").show();
})

$(".fa-times").click(function(){
    $(".modal-content").slideUp();
})

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
     $(".take_away").click(function(){
         $(".drop").slideUp();
         $("header").delay(2000).addClass("back_down");
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
        $(".about-us").delay(500).slideDown()
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
     
  
  //Jump to
     $("#news").click(function(){
		var $element = $(".news").offset().top;
		//alert($element);
		$("html,body").animate({
			scrollTop : $element
		}, 900);
	});
     $("#gallery").click(function(){
		var $element = $(".gallery").offset().top;
		//alert($element);
		$("html,body").animate({
			scrollTop : $element
		}, 900);
	});
     
      $("#video").click(function(){
		var $element = $(".video").offset().top;
		//alert($element);
		$("html,body").animate({
			scrollTop : $element
		}, 900);
	});
     $("#document").click(function(){
		var $element = $(".document").offset().top;
		//alert($element);
		$("html,body").animate({
			scrollTop : $element
		}, 900);
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
     
     var speed = 500;
            var autoswitch = true;
            var autoswicth_speed = 3000;
           var $counter = 0;
            var txtArray = ['.text_1','.text_2','.text_3', '.text_4'];
            //console.log(imgArray);
            var $new_ctn = 0;
     
            var $call = $(".call");
     
            $(".down").on('click',next);
            $(".down").on('click',main);
            function next(){
                $counter++;
                if($counter >= txtArray.length) $counter = 0;
                $(".caption_text").hide();
                $.each(txtArray, function(){
                    $new_ctn++;
                    if($new_ctn >= txtArray.length) $new_ctn = 0;
                    
                    if($counter === $new_ctn){
                        console.log("Count is " + $counter+ " and new count is : " + $new_ctn);
                        $(txtArray[$new_ctn]).fadeIn(500);
                    }
                });
                
                
            }
            $(".up").on('click',function(){
                
                $counter--;
                console.log($counter);
                if($counter < 0) $counter = txtArray.length - 1;
                
                $(".caption_text").hide();
                $.each(txtArray, function(){
                    $new_ctn--;
                    if($new_ctn < 0) $new_ctn = txtArray.length - 1;
                    
                    if($counter === $new_ctn){
                        console.log("Count is " + $counter+ " and new count is : " + $new_ctn);
                       
                        $(txtArray[$new_ctn]).fadeIn(500);
                    }
                }); 
            });
            
            if(autoswitch == true){
               setInterval(next, autoswicth_speed); }
     
     
     //Image Upload
     $('#img-uploader').click(function(e) {
        $('#file-upload').click()
      });
			 
			 
      $('#file-upload').change(function() {
        var reader = new FileReader();
        reader.onload = function(e) {
          var preview = document.querySelector('.avatar');
          preview.style.backgroundImage = `url(${e.target.result})`;
//          preview.style.maxWidth = '350px';
//          preview.style.maxHeight = '350px';
        }
        reader.readAsDataURL(this.files[0]);
      })
     
     
});

//Banner background image slide show
 var folder = "";
 var pictures=["images/Rental.jpg", "images/realty%20Finance.jpg", "images/Water.jpg", "images/Savings.jpg"];
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


