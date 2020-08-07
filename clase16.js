var signo = prompt('Cual es tu signo?')

switch (signo) {
  case 'aries':
      console.log('Es hora de que dejes de ser rehén de un error del pasado. Podrías decirte que es tu deber, que es lo menos que te mereces pero, como en todas las cosas, llega un momento en el que hay que seguir adelante. Si te castigas constantemente por errores del pasado, te arriesgas a descuidar el presente... y ¿qué pasa entonces? Ya ha transcurrido el tiempo suficiente. Has aprendido una lección. Puede que no hayas alcanzado la etapa de aceptación pero te estás moviendo en la dirección correcta. No tengas miedo de esperar un futuro más prometedor.');
    break;
    case 'tauro':
      console.log('Los científicos que se dedican al estudio del cerebro humano han fracasado sistemáticamente a la hora de encontrar grandes diferencias entre las versiones masculinas y femeninas del mismo. Al parecer, todos tenemos "programaciones" similares y, virtualmente, la habilidad de "reprogramarnos" nosotros mismos. Vale la pena que recuerdes esta habilidad cuando veas que estás respondiendo a situaciones difíciles de una manera obvia. Este fin de semana, ni tú, ni ninguna otra persona que participe en una situación en particular, estáis mentalmente programados para responder. Si lo que buscas es un cambio, sólo tienes que ponerte en marcha para encontrarlo.');
      break;
      case 'cancer':
      case 'cáncer':
      console.log('Algunas veces los momentos de serendipia pueden rayar en lo divino. Esa increíble sensación de que algo perfecto aterriza en tu regazo es casi inigualable. Conforme Venus se instala en tu signo, trae ante ti la que parece una "opción fácil". Aunque puedes ver que hay buenas razones para seguir por ahí, a otra parte de ti le preocupa que la solución rápida tenga poca visión de futuro y que incluso sea peligrosa. A veces es mejor ser preciso. Pero, si este fin de semana te dejas llevar por la corriente y te relajas, acabarás en un lugar mucho mejor.');
        break;
  default:
  console.log('No es un signo zodiacal valido');
break;
}
