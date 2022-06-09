const traffic_ligths = {
    stop_ligth: 'RED',
    caution_ligth: 'YELLOW',
    go_litgh: 'GREEN',
};

let luzActual = ' ';

function cambiarLuz() 
{
    
    switch (luzActual) 
    {

      case 'RED':
        luzActual = traffic_ligths.go_litgh;
        document.write(luzActual + "<br />"+"<br />");
        break;

      case 'GREEN':
        luzActual = traffic_ligths.caution_ligth;
        document.write(luzActual+ "<br />"+"<br />");
        break;

      case 'YELLOW':
        luzActual = traffic_ligths.stop_ligth;
        document.write(luzActual+ "<br />"+"<br />");
        break;

      default:
        luzActual = traffic_ligths.stop_ligth;
        document.write(luzActual+ "<br />" + "<br />");
        break;

    }
  
  }

  setInterval(cambiarLuz, 2000); // hace que se repita el ciclo cada 2000 ms
  // cambiarLuz();
