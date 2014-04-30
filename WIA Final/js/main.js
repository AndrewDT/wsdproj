$(function(){
    
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
    
    
    $("#bar1Label").mouseover(function(){
        $("#bar1").animate({height:"50px", width:"150px"}, 1000);
    }); 
    
    $("#bar2Label").mouseover(function(){
        $("#bar2").animate({height:"50px", width:"250px"}, 1000);
    }); 
    
    $("#bar3Label").mouseover(function(){
        $("#bar3").animate({height:"50px", width:"400px"}, 1000);
    }); 
    
    $("#img2").hide();
    $("#img3").hide();
    
    var images = [
        $("#img1"),
        $("#img2"),
        $("#img3")
    ];
    
    
    $("#galleryButton1").click(function(){
        images[0].fadeIn(1000);
        images[1].hide();
        images[2].hide();
        $("#galleryButton1").addClass("active");
        $("#galleryButton2").removeClass("active");
        $("#galleryButton3").removeClass("active");
    })

    $("#galleryButton2").click(function(){
        images[0].hide(); 
        images[1].fadeIn(1000);
        images[2].hide();
        $("#galleryButton1").removeClass("active");
        $("#galleryButton2").addClass("active");
        $("#galleryButton3").removeClass("active");
    })
                               
    $("#galleryButton3").click(function(){
        images[0].hide(); 
        images[1].hide();
        images[2].fadeIn(1000);
        $("#galleryButton1").removeClass("active");
        $("#galleryButton2").removeClass("active");
        $("#galleryButton3").addClass("active");
    })
    

});