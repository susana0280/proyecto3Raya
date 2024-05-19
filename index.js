let buttons=document.querySelectorAll(".box")
let botonPulsado;
let jugador1=1;
let jugador2=2;
let textoVictoria=document.getElementById("textoVictoria")
let indice=0;
turnoJugador=jugador1;
let todosDeshabilitados = true;
let tablas=false;
let contadorClick=0;
let imagenVictoria=document.getElementById("imagenVictoria")


function pulsar(e){
botonPulsado=e.target;
contadorClick++;
console.log(contadorClick)

    if(turnoJugador===jugador1){
    
        buttons.forEach(button=>{
            if(botonPulsado===button){
                button.innerHTML=`<img src="/assets/imgs/circulo.png" class="buttonO" alt="">`
              button.disabled=true
             }
         })                                        
    
         comprobarGanador()
         empate()
        turnoJugador=jugador2
     
        }

   else if(turnoJugador===jugador2){
        buttons.forEach(button=>{
            if(botonPulsado===button){
                button.innerHTML=`<img src="/assets/imgs/equis.png" alt="" class="buttonX">`
              button.disabled=true;
            }
        })
        comprobarGanador()
        empate()
        turnoJugador=jugador1 
   
    }
}   

function comprobarGanador(){

    buttons.forEach(button=>{

        if( buttons[0].innerHTML===buttons[4].innerHTML && buttons[0].innerHTML===buttons[8].innerHTML  ){
            if(buttons[0].innerHTML && buttons[4].innerHTML && buttons[8].innerHTML){
             buttons.forEach(button=>{
                 button.disabled=true;
              })
              textoVictoria.innerText=`Ha ganado jugador ${turnoJugador}`
              imagenVictoria.innerHTML=`<img class="victoria"  src="/assets/imgs/party-confetti-svgrepo-com.svg">`
              tablas=false;
           
            }
         }   


        if( buttons[0].innerHTML===buttons[1].innerHTML && buttons[0].innerHTML===buttons[2].innerHTML  ){
           if(buttons[0].innerHTML && buttons[1].innerHTML && buttons[2].innerHTML){
            buttons.forEach(button=>{
                button.disabled=true;
             })
             textoVictoria.innerText=`Ha ganado jugador ${turnoJugador}`
             imagenVictoria.innerHTML=`<img class="victoria" src="/assets/imgs/party-confetti-svgrepo-com.svg">`
             tablas=false;
            
           }
        }
     
         if( buttons[3].innerHTML===buttons[4].innerHTML && buttons[3].innerHTML===buttons[5].innerHTML  ){
            if(buttons[3].innerHTML && buttons[4].innerHTML && buttons[5].innerHTML){
                                   
                buttons.forEach(button=>{
                    
                    button.disabled=true;
                 })
                 textoVictoria.innerText=`Ha ganado jugador ${turnoJugador}`
                 imagenVictoria.innerHTML=`<img class="victoria" src="/assets/imgs/party-confetti-svgrepo-com.svg">`
                 tablas=false;
                
               }
        }

       
     if(buttons[6].innerHTML===buttons[7].innerHTML && buttons[6].innerHTML===buttons[8].innerHTML){
            if(buttons[6].innerHTML && buttons[7].innerHTML && buttons[8].innerHTML){

                   buttons.forEach(button=>{
                    button.disabled=true;
                 })
                 textoVictoria.innerText=`Ha ganado jugador ${turnoJugador}`
                 imagenVictoria.innerHTML=`<img class="victoria" src="/assets/imgs/party-confetti-svgrepo-com.svg">`
                 tablas=false;
             
               }
        }


          if( buttons[2].innerHTML===buttons[4].innerHTML && buttons[2].innerHTML===buttons[6].innerHTML  ){
            if(buttons[2].innerHTML && buttons[4].innerHTML && buttons[6].innerHTML){
             
                buttons.forEach(button=>{
                    button.disabled=true;
                 })
                 textoVictoria.innerText=`Ha ganado jugador ${turnoJugador}`
                 imagenVictoriaVictoria.innerHTML=`<img class="victoria"  src="/assets/imgs/party-confetti-svgrepo-com.svg">`
                 tablas=false;
            
               }
             }
              if( buttons[0].innerHTML===buttons[3].innerHTML && buttons[0].innerHTML===buttons[6].innerHTML  ){
                if(buttons[0].innerHTML && buttons[3].innerHTML && buttons[6].innerHTML){
                        buttons.forEach(button=>{
                        button.disabled=true;
                     })
                     textoVictoria.innerText=`Ha ganado jugador ${turnoJugador}`
                     imagenVictoria.innerHTML=`<img class="victoria" src="/assets/imgs/party-confetti-svgrepo-com.svg">`
                     tablas=false;
                  
                   }
                 }
                   if( buttons[1].innerHTML===buttons[4].innerHTML && buttons[1].innerHTML===buttons[7].innerHTML  ){
                    if(buttons[1].innerHTML && buttons[4].innerHTML && buttons[7].innerHTML){
                     
                        buttons.forEach(button=>{
                            button.disabled=true;
                         })
                         textoVictoria.innerText=`Ha ganado jugador ${turnoJugador}`
                         imagenVictoria.innerHTML=`<img class="victoria" src="/assets/imgs/party-confetti-svgrepo-com.svg">`
                                                
                       }
                     }

                       if( buttons[2].innerHTML===buttons[5].innerHTML && buttons[2].innerHTML===buttons[8].innerHTML  ){
                        if(buttons[2].innerHTML && buttons[5].innerHTML && buttons[8].innerHTML){
                         
                            buttons.forEach(button=>{
                                button.disabled=true;
                             })
                             textoVictoria.innerText=`Ha ganado jugador ${turnoJugador}`
                             imagenVictoria.innerHTML=`<img class="victoria" src="/assets/imgs/party-confetti-svgrepo-com.svg">`
                             tablas=false;
                            
                           }
                         }
                         }) 

                        }
     
      function empate(){
        if(contadorClick===9){
          tablas=true;
          textoVictoria.innerHTML="TABLAS"
        }
             }
                

            

    function reiniciar(){
     
      buttons.forEach(button => {
         textoVictoria.innerHTML="";
         imagenVictoria.innerHTML="";
        if(button.disabled) {
          console.log(button.disabled)
          button.innerHTML="";
          button.disabled=false;
          contadorClick=0
        }
        if(!button.disabled){
          button.disabled=false;
          button.innerHTML="";
          contadorClick=0
        }
 
       });


    }