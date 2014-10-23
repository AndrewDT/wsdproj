$(function(){
    
    
/*-----------------Banner Gallery Events------------------*/
    
    var bannerGal = [
        $("#banner1"),
        $("#banner2"),
        $("#banner3")
    ];
    
    $("#banner2").hide();
    $("#banner3").hide();
    
    
    $("#galleryButton1").click(function(){
        bannerGal[0].fadeIn(1000);
        bannerGal[1].hide();
        bannerGal[2].hide();
        $("#galleryButton1").addClass("active");
        $("#galleryButton2").removeClass("active");
        $("#galleryButton3").removeClass("active");
    })

    $("#galleryButton2").click(function(){
        bannerGal[0].hide(); 
        bannerGal[1].fadeIn(1000);
        bannerGal[2].hide();
        $("#galleryButton1").removeClass("active");
        $("#galleryButton2").addClass("active");
        $("#galleryButton3").removeClass("active");
    })
                               
    $("#galleryButton3").click(function(){
        bannerGal[0].hide(); 
        bannerGal[1].hide();
        bannerGal[2].fadeIn(1000);
        $("#galleryButton1").removeClass("active");
        $("#galleryButton2").removeClass("active");
        $("#galleryButton3").addClass("active");
    })
    
    
/*----------------Map Events--------------------*/  
    
    
    $("#westInfo").hide();
    
    $("#westIcon").mouseover(function(){
        $("#westInfo").fadeIn();
        
        $("#westIcon").mouseleave(function(){
            $("#westInfo").fadeOut();
        })
    });
    
    $("#midWestInfo").hide();
    
    $("#midWestIcon").mouseover(function(){
        $("#midWestInfo").fadeIn();
        
        $("#midWestIcon").mouseleave(function(){
            $("#midWestInfo").fadeOut();
        })
    });
    
    $("#southInfo").hide();
    
    $("#southIcon").mouseover(function(){
        $("#southInfo").fadeIn();
        
        $("#southIcon").mouseleave(function(){
            $("#southInfo").fadeOut();
        })
    });
    
    $("#northInfo").hide();
    
    $("#northIcon").mouseover(function(){
        $("#northInfo").fadeIn();
        
        $("#northIcon").mouseleave(function(){
            $("#northInfo").fadeOut();
        })
    });
    
    
/*------------------Bar Chart Events--------------------------*/    
    
    
    $("#bar1Label").mouseover(function(){
        $("#bar1").animate({height:"50px", width:"150px"}, 1000);
    }); 
    
    $("#bar2Label").mouseover(function(){
        $("#bar2").animate({height:"50px", width:"250px"}, 1000);
    }); 
    
    $("#bar3Label").mouseover(function(){
        $("#bar3").animate({height:"50px", width:"400px"}, 1000);
    });
    
/*------------------Modernizr Video Check---------------------*/    
    
    if(!Modernizr.video.ogg && !Modernizr.video.webm && !Modernizr.video.h264){
        $("#textFallback").html("Sorry, your browser does not support HTML5 Video");
    }
    
    
});

console.log(Modernizr);
