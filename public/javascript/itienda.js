window.addEventListener("load", ()=>{
    
    $(".filtro__descripcion__carro").mouseover(function () {

        var tl = new TimelineMax();    //shorter syntax!
    tl.to(".filtro__descripcion__carro", .1, { x: 70,  ease: Expo.easeOut});
    tl.to(".filtro__descripcion__carro", .3, { opacity:0});
    tl.to(".filtro__descripcion__carro", .1, { x: -50, ease: Expo.easeOut});
    tl.to(".filtro__descripcion__carro", .3, { opacity:.5});
    tl.to(".filtro__descripcion__carro", .3, { x: 0,  ease: Expo.easeOut});
    tl.to(".filtro__descripcion__carro", .3, { opacity:1});

    });

    
    $(".filtro__descripcion__carro").mouseout(function () {

        var tl = new TimelineMax();    //shorter syntax!
     tl.to(".filtro__descripcion__carro", .3, { scale:1});

    });

    
    $(".img").mouseover(function () {

        var tl = new TimelineMax();    //shorter syntax!
        tl.to(this,0.5, {scale:1.2}, {scale:1.2});
       

    });

      
    $(".img").mouseout(function () {

        var tl = new TimelineMax();    //shorter syntax!
      tl.to(this, 0.5, {scale:1}, {scale:1});

    });

});