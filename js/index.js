
/*-- CARACTERES:  ´ + ' / | ¬ ~ \ < > ¡ ! # $ % & / `    --*/
/*console.log ("****************************");*/

/*-- Cuando uso Jquery no hace falta poner use strict--*/


$(document).ready(function() {
    console.log("Estamos ready desde el JavaScript");
    console.log("*********************************");
    


    if(window.location.href.indexOf("index47") > -1){       //CON ESTO CHEQUEO QUE ESTÉ EN LA PAGINA INDICE. CIERRA DESPUES DE LOS POST
    $(function(){                       //SLIDER
        $('.slider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 1200,
        });
      }); //fin de slider

    


    var posts = [                             // Objetos JSON con los posteos
            { title : "Prueba de titulo 1",
                date : 'Publicado hace '+moment().startOf('hour').fromNow(),
                content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe, non modi totam aperiam recusandae aliquid earum tempora quos nihil fugit, nisi accusamus rerum, eaque incidunt sed quam nemo odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe, non modi totam aperiam recusandae aliquid earum tempora quos nihil fugit, nisi accusamus rerum, eaque incidunt sed quam nemo odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe, non modi totam aperiam recusandae aliquid earum tempora quos nihil fugit, nisi accusamus rerum, eaque incidunt sed quam nemo odit?"
            },
            { title : "Prueba de titulo 2",
            date : 'Publicado el día '+moment().date()+' de '+moment().format('MMMM'),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe, non modi totam aperiam recusandae aliquid earum tempora quos nihil fugit, nisi accusamus rerum, eaque incidunt sed quam nemo odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe, non modi totam aperiam recusandae aliquid earum tempora quos nihil fugit, nisi accusamus rerum, eaque incidunt sed quam nemo odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe, non modi totam aperiam recusandae aliquid earum tempora quos nihil fugit, nisi accusamus rerum, eaque incidunt sed quam nemo odit?"
            },
            { title : "Prueba de titulo 3",
            date : moment().format('MMMM Do YYYY'),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe, non modi totam aperiam recusandae aliquid earum tempora quos nihil fugit, nisi accusamus rerum, eaque incidunt sed quam nemo odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe, non modi totam aperiam recusandae aliquid earum tempora quos nihil fugit, nisi accusamus rerum, eaque incidunt sed quam nemo odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe, non modi totam aperiam recusandae aliquid earum tempora quos nihil fugit, nisi accusamus rerum, eaque incidunt sed quam nemo odit?"
            },
            { title : "Prueba de titulo 4",
            date : moment().format('MMMM Do YYYY'),
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe, non modi totam aperiam recusandae aliquid earum tempora quos nihil fugit, nisi accusamus rerum, eaque incidunt sed quam nemo odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe, non modi totam aperiam recusandae aliquid earum tempora quos nihil fugit, nisi accusamus rerum, eaque incidunt sed quam nemo odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe, non modi totam aperiam recusandae aliquid earum tempora quos nihil fugit, nisi accusamus rerum, eaque incidunt sed quam nemo odit?"
            }];
            posts.reverse(); //esto lo pongo por paja de dar vuelta el array, no es necesario

    reloadpost();


    $("#createpost").submit(function(e){
        e.preventDefault();
        var newtitle = $("#titulo").val();
        var newcontent = $("#newcontent").val();
        var newpost = {title: `${newtitle}`,
                    date: 'Publicado hace '+moment().startOf('hour').fromNow(),
                    content: `${newcontent}`
                    };
        let post = `<article class="post">          
                    <h2>${newpost.title}</h2>
                    <span class="date">${newpost.date}</span>
                    <p id="text">${newpost.content}</p>
                    </article>
                    <a href="" class="buttonmore">Leer más</a>
                    `;
        $("#posts").prepend(post);
        $("#titulo").val(" ");
        $("#newcontent").val(" ");
        return false;
    });


    function reloadpost () {
        posts.forEach ((item, index)=>{
            var post = `
                        <article class="post">          
                        <h2>${item.title}</h2>
                        <span class="date">${item.date}</span>
                        <p id="text">${item.content}</p>
                        </article>
                        <a href="" class="buttonmore">Leer más</a>
                        `;
            $("#posts").prepend(post);
        }); //fin del forEach  
    }; //fin de reloadpost

};// fin de if para chequear si está en la pagina index47


//ACORDEON
if(window.location.href.indexOf("Aboutme") > -1){       //CON ESTO CHEQUEO QUE ESTÉ EN LA PAGINA INDICE. CIERRA DESPUES DE LOS POST
    $("#acordeon").accordion({
        collapsible: "true"     //modificación para que puedan cerrarse todas las pestañas
    });                         //OJO QUE SE ESCRIBE aCCordIon
};

//RELOJ
if(window.location.href.indexOf("Clock") > -1){       //CON ESTO CHEQUEO QUE ESTÉ EN LA PAGINA INDICE. CIERRA DESPUES DE LOS POST
    setInterval(() => {
        var reloj = moment().format("hh:mm:ss");
        $("#clock").html(reloj);
    }, 1000);
};


//VALIDAR FORMULARIO
if(window.location.href.indexOf("Contact") > -1){  
    /*$("form input[name='date']").datepicker({
        dateFormat: 'yy-MM-dd'
    });*/                                            //TENGO PROBLEMAS DE COMPATIBILIDAD DE FORMATO DE FECHA

    $("#form").submit(function(){
      $(this).validate();
  });


};// fin del if







    var theme =$("#theme")                  //cambio de theme
    $("#toGreen").click(function(){
        theme.attr("href", "C:/Users/Seba Toso/Desktop/Cursos/Desarrollo web/udemy/Ejercicio 47 - Proyecto/css/stylesgreen.css")
    });           
    $("#toRed").click(function(){
        theme.attr("href", "C:/Users/Seba Toso/Desktop/Cursos/Desarrollo web/udemy/Ejercicio 47 - Proyecto/css/stylesred.css")
    });
    $("#toOrange").click(function(){
        theme.attr("href", "C:/Users/Seba Toso/Desktop/Cursos/Desarrollo web/udemy/Ejercicio 47 - Proyecto/css/stylesorange.css")
    });


    $(".scrollup").click(function(e){
        e.preventDefault();
        $("html, body").animate({scrollTop: 0}, 800)    //scrollTop es animacion de Jquery
        return false;
    });









    var user ={};                                       //LOG IN
    $("#login form").submit(function(){                 //capturo el form del div con id #login
        user = {                                        //creo un objeto con la info del usuario
            username: $("#formName").val(),
            usermail: $("#formMail").val(),
            userpass: $("#formPass").val()
            };
        localStorage.setItem("User", JSON.stringify(user));     //lo cargo en el localstorage convertido a string
    });

    var userlog = JSON.parse(localStorage.getItem("User"));     //creo un objeto al que le cargo el localstorage reconvertido
    var aboutP= $("#about p")                                   
    aboutP.html("<br><b>Bienvenido<br>"+userlog.username+"!</b>");          //utilizo .username para escribir solo el nombre guardado en el objeto
    aboutP.append('<br><a href="#" class="logout">Log Out</a>');            //creo un boton para cerrar sesión
    $("#login").hide();

    $(".logout").click(function(){
        localStorage.clear();               //al borrar el localstorage y recargar la pantalla, nunca realiza la accion de ocultar p y el form
        location.reload();                  // este método recarga la pantalla
    });










}); // fin de función .ready