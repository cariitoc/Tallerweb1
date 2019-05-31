window.addEventListener("load", () => {


    //Esto sirve para una sola animacion
    // TweenMax.to(".cards", 2, {y:100, x:-100, rotation:360});

    //Para varias

    TweenMax.to(".banner__video video", 2, { x: 150 });

    var tl = new TimelineMax();    //shorter syntax!
    tl.to(".cards", .3, { y: 3, ease: Power0.easeOut });
    tl.to(".cards", .3, { y: -3, ease: Power0.easeOut });
    tl.to(".cards", .3, { y: 3, ease: Power0.easeOut });
    tl.to(".cards", .3, {
        y: -3, ease: Power0.easeOut, onComplete: () => {
            tl.restart();
        }
    });

    $(".button").mouseover(function () {

        var tl = new TimelineMax();    //shorter syntax!
        tl.to(this, 0.2, { scale: 1.1 }, { scale: 1.1 });


    });


    $(".button").mouseout(function () {

        var tl = new TimelineMax();    //shorter syntax!
        tl.to(this, 0.5, { scale: 1 }, { scale: 1 });

    });


    /*
            $("button").click(function () {
    
                var tl = new TimelineMax();
                tl.to("h1", 2, { x: 100 });
                tl.to("div", 2, { x: 200 }); //shorter syntax!
    
            });
    
            $("button").mouseover(function () {
    
                var tl = new TimelineMax();
                tl.to("h1", 2, { x: 100 });
                tl.to("div", 2, { x: 200 }); //shorter syntax!
    
            });
    
            $("button").mouseout(function () {
    
                var tl = new TimelineMax();
                tl.to("h1", 2, { x: 100 });
                tl.to("div", 2, { x: 200 }); //shorter syntax!
    
            });
    */


    //click
    //mouseover
    //mouseout





    // tl.add(TweenMax.to("div", 2, { x: 100 }));


});