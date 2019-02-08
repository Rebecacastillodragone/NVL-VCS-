class Personaje {
  constructor(id,nombre, experiencia, puntosvida, img) {
    this.id= id;
    this.nombre = nombre;
    this.experiencia = experiencia;
    this.puntosvida = puntosvida;
    this.img = img;
  }

  saludar() {

    return "Hola soy " + this.nombre;
  }

  pelear(objetivo) {
    if (objetivo.puntosvida > 1) {
      objetivo.puntosvida = objetivo.puntosvida - 1;
      return objetivo.puntosvida + "  tienes una vida menos";
    } else return " te has quedado sin vidas";
  }

}

class Guerrero extends Personaje {
  constructor( id, nombre, experiencia, puntosvida,img,armas) {
    super(id,nombre, experiencia, puntosvida,img);
    this.armas = armas;
  }

  atacar() {
    return "Uso mi  " + this.armas + "  para atacarte";
  }
}

class Hechicero extends Personaje {
  constructor(id,nombre, experiencia, puntosvida,img,conjuros) {
    super(id,nombre, experiencia, puntosvida,img);
    this.conjuros = conjuros;
  }
  hechizar() {
    return "Uso mi  " + this.conjuros + "  para destruirte";

  }
}
var cazador = new Guerrero("1","Cazador", "Centenaria", 5,"img/cazador.png", "Arco mortifero");
console.log(cazador.saludar());
console.log(cazador.atacar());


var mosquetero = new Guerrero("2","Mosquetero", "Milenaria", 8,"img/mosquetero.png", "Arma de fuego");
console.log(mosquetero.saludar());
console.log(mosquetero.atacar());

var druida = new Hechicero("Druida", "Milenaria", 8,"img/driuda.png", "Tormenta de hielo");
console.log(druida.saludar());

console.log(druida.hechizar());
console.log(druida.pelear(cazador));
console.log(cazador);

var mago = new Hechicero("Mago", "Centenaria", 8,"img/mago.png","Zancada Prodigiosa");
console.log(mago.saludar());
console.log(mago.hechizar());

personajes = [cazador,mosquetero,druida,mago];

var plantilla= document.querySelector("#heroes");
var newDiv = template.content.querySelector("div");



// document.querySelector('#nombre').textContent = druida.saludar() + "  " + druida.hechizar();
// document.querySelector('#nombre2').textContent = cazador.saludar() + "  " + cazador.atacar();
// var template= document.querySelector("#heroe");
// var newDiv = template.content.querySelector("div");

// for(i=0;i<heroes.length;i++) {
//     var a = newDiv.cloneNode(true);
//     a.id = "elemDiv" + heroes[i].identificador;

//     a.querySelector("#nombre").innerHTML = heroes[i].nombre;
//     a.querySelector("img").src = heroes[i].imagen;
//     a.querySelector(".vida").innerHTML = heroes[i].ptosVida;

//     var btn = a.querySelector("button");
//     btn.id = heroes[i].identificador;
//     btn.addEventListener("click", atacar);
//     document.querySelector("#colItems").appendChild(a);
// }

// function atacar (event) {
//   let idBtn = event.target.id;
//   let atacante = getHeroeById(idBtn);
//   let adversario = getAdversario(atacante);
//   atacante.atacar(adversario);
//   disableAttack(event.target, 5000);
  
// }









// var div;
// var bottonpelea;

// function apretarboton() {
//   bottonpelea = document.querySelector("#ataca")
//   bottonpelea.innerHTML = "Pelea";
//   bottonpelea.onclick = function () {
//     var res = druida.pelear(cazador);

//     var div = document.querySelector(".resultado");
//     if (res != 0) div.innerHTML = druida.pelear(cazador);
//   }
// }
// console.log(apretarboton());

// var div2;
// var bottonpelea2;

// function apretarboton2() {
//   bottonpelea2 = document.querySelector("#ataca2")
//   bottonpelea2.innerHTML = "Pelea";
//   bottonpelea2.onclick = function () {
//     var res2 = cazador.pelear(druida);

//     var div2 = document.querySelector(".resultado2");
//     if (res2 != 0) div2.innerHTML = cazador.pelear(druida);
//   }
// }
// console.log(apretarboton2());