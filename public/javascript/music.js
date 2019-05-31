
        window.addEventListener("load", function () {
            let juego = new Ruleta();
            juego.agregar(200, 200, "/img/nir-04.png", "/sound/comeasur/bateria.mp3");
            juego.agregar(200, 500, "/img/nir-03.png", "/sound/comeasur/guitarra.mp3");
            juego.agregar(1000, 200, "/img/nir-08.png", "/sound/comeasur/voz.mp3");
            juego.incluirEn("#juego");


            let juego3 = new Ruleta();
            juego3.agregar(200, 200, "/img/nir-01.png", "/sound/heart/bateria.mp3");
            juego3.agregar(200, 500, "/img/nir-09.png", "/sound/heart/guitarra.mp3");
            juego3.agregar(1000, 200, "/img/nir-02.png", "/sound/heart/voz.mp3");
            juego3.incluirEn("#juego3");

            let juego2 = new Ruleta();
            juego2.agregar(200, 200, "/img/nir-07.png", "/sound/smells/bateria.mp3");
            juego2.agregar(200, 500, "/img/nir-06.png", "/sound/smells/bajo.mp3");
            juego2.agregar(1000, 200, "/img/nir-05.png", "/sound/smells/voz.mp3");
            juego2.incluirEn("#juego2");


            
        function ocultarTodo() {
            $("#juego").css({
                display: "none",
                with: "0",
                height: "0",
                opacity: 0
            });
            $("#juego2").css({
                display: "none",
                with: "0",
                height: "0",
                opacity: 0
            });
            $("#juego3").css({
                display: "none",
                with: "0",
                height: "0",
                opacity: 0,

            });
        }

        ocultarTodo()


        $(".btn__juego1").click(function () {
            ocultarTodo();
            $("#juego").css({
                display: "block"
            });
            TweenMax.to("#juego", 2, { with: 1280, height: 720, opacity: 1 });
        });

        $(".btn__juego2").click(function () {
            ocultarTodo();
            $("#juego2").css({
                display: "block"
            });
            TweenMax.to("#juego2", 2, { with: 1280, height: 720, opacity: 1 });
        });

        $(".btn__juego3").click(function () {
            ocultarTodo();
            $("#juego3").css({
                display: "block"
            });
            TweenMax.to("#juego3", 2, { with: 1280, height: 720, opacity: 1 });
        });

        $(".btn__juego1").mouseover(function () {

            var tl = new TimelineMax();    //shorter syntax!
            tl.to(this,0.3, {scale:1.2}, {scale:1.2});
           
    
        });
    
          
        $(".btn__juego1").mouseout(function () {
    
            var tl = new TimelineMax();    //shorter syntax!
          tl.to(this, 0.3, {scale:1}, {scale:1});
    
        });

        $(".btn__juego2").mouseover(function () {

            var tl = new TimelineMax();    //shorter syntax!
            tl.to(this,0.3, {scale:1.2}, {scale:1.2});
           
    
        });
    
          
        $(".btn__juego2").mouseout(function () {
    
            var tl = new TimelineMax();    //shorter syntax!
          tl.to(this, 0.3, {scale:1}, {scale:1});
    
        });

        $(".btn__juego3").mouseover(function () {

            var tl = new TimelineMax();    //shorter syntax!
            tl.to(this,0.3, {scale:1.2}, {scale:1.2});
           
    
        });
    
          
        $(".btn__juego3").mouseout(function () {
    
            var tl = new TimelineMax();    //shorter syntax!
          tl.to(this, 0.3, {scale:1}, {scale:1});
    
        });



        });

        