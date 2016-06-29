//definindo uma variavel Cylon, cujo ela é do tipo cylon
var Cylon = require('cylon');

//framework para robotica
Cylon.robot({
  // definindo a nossa conexao com o arduino
  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/cu.usbmodemFD111' }
  },
  //informando ao framework quais dispositivos iremos usar em nosso arduino
  devices: {
  //dando um nome ao meu led, falando para o framework que ele é um dispositivo de led que está conectado no pino 13 do arduino
    ledVerde: { driver: 'led', pin: 13 },
    //dando um nome ao meu led, falando para o framework que ele é um dispositivo de led que está conectado no pino 12 do arduino
    ledVermelho: { driver: 'led', pin: 10}
  },
  // funcao para acendimento do led
  work: function(my) {
    //estou dizendo a funcao que é para piscar o led a cada 1 segundo
    every((1).second(), function(){


      if(my.ledVerde.turnOff() !== my.ledVermelho.turnOff()){
        //pisque o led verde(Green)
        my.ledVerde.toggle(),

         my.ledVerde.turnOn(),
        my.ledVermelho.turnOff()
       

      } else{
        my.ledVerde.turnOff(),
        //pisque o led vermelho(Red)
        my.ledVermelho.toggle()
      }
      
      
      
    });
  }
  //comando para startar nosso código
}).start();