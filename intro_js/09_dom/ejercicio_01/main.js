const parrafo = document.createElement("p");

const nodeDeTexto = document.createTextNode("Avatar La leyenda de korra");
parrafo.appendChild(nodeDeTexto);
/* parrafo.innerHTML("Avatar La leyenda de korra"); */
parrafo.style.color = "red";
parrafo.style.fontFamily = "Arial";

const padre = document.getElementById("padre");
padre.appendChild(parrafo)

/**
 * Crear un elemnto "a"
 *      *Añadir un texto
 *      *Anadir un atributo para la url href
 * agregar a la paguina de HTML

 */

const hipervinculo = document.createElement("a");

/* hipervinculo. (link); */

const nodoDeTexto = document.createTextNode("Google");
hipervinculo.appendChild(nodoDeTexto);

const link = document.createAttribute("href");
link.value = "https://www.google.com";
hipervinculo.setAttributeNode(link);

const hijo = document.getElementById("hijo");
hijo.appendChild(hipervinculo);