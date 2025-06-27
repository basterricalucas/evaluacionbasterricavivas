//instrucciones para inicializar git y github
// 1 crea repositorio en github
// 2 inicializar el repo local en una carpeta de tu pc
// : git init
// 3 agrega el repo de github:
// git remote add origin https://github.com/basterricalucas/evaluacionbasterricavivas.git 
// 4 creamos un nuevo archivo y realizamos cambios
// 5 agregamos los cambios al area de preparación
//: git add .
// 6 realiza un commit de los cambios
// : git commit -m "descripción de los cambios"
// 7 sube los cambios a github: git push -u origin master

let sapos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]; //array de los 10 sapos
let winner = -1;

function crearSapos() {
    for (let i = 0; i < sapos.length; i++) {
        sapos[i] += Math.floor(Math.random()*16)+5;

 
        }
    }

function saltarSapos() {
       do {
         for (let i = 0; i < sapos.length; i++) {
        sapos[i] = Math.floor(Math.random()*16)+5;

        if (sapos[i] >= 80) {
            winner = i;
        console.log(" el sapo en la posicion " + winner + " es el ganador");
        }
           
        }
        
        }   
         
           while (winner === -1)
        
           
    }
      
    


function mostrarSapos() {
    console.log(sapos);
    
    
}


crearSapos();
saltarSapos();
mostrarSapos();
