$(function(){
    
/*-----------------------Index code start----------------------------------*/    
    
    var bannerGal = [
        $("#banner1"),
        $("#banner2"),
        $("#banner3")
    
    ];
    
    var galButtons = [
        $("#gal_button1"),
        $("#gal_button2"),
        $("#gal_button3")
    ]
    
    bannerGal[1].hide();
    bannerGal[2].hide();
    
    
    galButtons[0].click(function(){
        galButtons[0].addClass("current_banner");
        galButtons[1].removeClass("current_banner");
        galButtons[2].removeClass("current_banner");
        bannerGal[0].fadeIn(100);
        bannerGal[1].hide();
        bannerGal[2].hide();
    })
    
    galButtons[1].click(function(){
        galButtons[0].removeClass("current_banner");
        galButtons[1].addClass("current_banner");
        galButtons[2].removeClass("current_banner");
        bannerGal[0].hide();
        bannerGal[1].fadeIn(100);
        bannerGal[2].hide();
    })

    galButtons[2].click(function(){
        galButtons[0].removeClass("current_banner");
        galButtons[1].removeClass("current_banner");
        galButtons[2].addClass("current_banner");
        bannerGal[0].hide();
        bannerGal[1].hide();
        bannerGal[2].fadeIn(100);
    })
    
    
    
    function changeBanner(){
        if(galButtons[0].hasClass("current_banner")){
            bannerGal[0].fadeOut();
            galButtons[0].removeClass("current_banner");
            bannerGal[1].fadeIn();
            galButtons[1].addClass("current_banner");
        }else if(galButtons[1].hasClass("current_banner")){
            bannerGal[1].fadeOut();
            galButtons[1].removeClass("current_banner");
            bannerGal[2].fadeIn();
            galButtons[2].addClass("current_banner");
        }else if(galButtons[2].hasClass("current_banner")){
            bannerGal[2].fadeOut();
            galButtons[2].removeClass("current_banner");
            bannerGal[0].fadeIn();
            galButtons[0].addClass("current_banner");
        }
    }
    
    bannerInterval = window.setInterval(function(){changeBanner()}, 5000);
    
    

    
    var clientTestimonial = [
        $("#client1"),
        $("#client2"),
        $("#client3"),
        $("#client4"),
        $("#client5")
    ]
    
    clientTestimonial[0].show();
    for(i = 1; i<clientTestimonial.length; i++){
        clientTestimonial[i].hide()
    }
    
    function changeTest(){
        clientTestimonial[0].fadeOut(500)
        currentClient = clientTestimonial[Math.floor(Math.random()*clientTestimonial.length)];
        while(currentClient.hasClass("current_client")){
            currentClient = clientTestimonial[Math.floor(Math.random()*clientTestimonial.length)];
        }
        for(i = 0, j = clientTestimonial.length; i<j; i++){
            clientTestimonial[i].removeClass("current_client");
        }
        currentClient.addClass("current_client").delay(2200).fadeIn(1000).delay(2000).fadeOut(500);
    };
    
    testimonialInterval = window.setInterval(function(){changeTest()}, 3500);
    
    /*-----------------------Index code end----------------------------------*/

    
    /*-----------------------Trainers code start----------------------------------*/
    
    var trainerButtons = [
        $("#trainer1_button"),
        $("#trainer2_button")
    ]
    
    var trainerImg = [
        $("#trainer1_img"),
        $("#trainer2_img")
    ]
    
    var trainerInfo = [
        $("#trainer1_info_container"),
        $("#trainer2_info_container")
    ]

    trainerImg[1].hide();
    trainerInfo[1].hide();
    
    
    trainerButtons[0].click(function(){
        trainerButtons[0].addClass("current_trainer")
        trainerButtons[1].removeClass("current_trainer")
        trainerImg[0].fadeIn(1000);
        trainerInfo[0].fadeIn(1000);
        trainerImg[1].hide();
        trainerInfo[1].hide();
    })
    
    trainerButtons[1].click(function(){
        trainerButtons[1].addClass("current_trainer")
        trainerButtons[0].removeClass("current_trainer")
        trainerImg[1].fadeIn(1000);
        trainerInfo[1].fadeIn(1000);
        trainerImg[0].hide();
        trainerInfo[0].hide();
    
    })
    

});