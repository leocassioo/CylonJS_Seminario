var Cylon = require('cylon');

Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/cu.usbmodemFD111' }
  },

  devices: {
    servo: { driver: 'servo', pin: 9 },
    ledVerde: { driver: 'led', pin: 13 },
    //dando um nome ao meu led, falando para o framework que ele é um dispositivo de led que está conectado no pino 12 do arduino
    ledVermelho: { driver: 'led', pin: 10 }
  },  

  work: function(my) {
    var anguloAtual = 0;

    my.servo.angle(anguloAtual);

    every((0.5).second(), function() {
      
      anguloAtual = anguloAtual + 45;

      if(anguloAtual === 0){
      	my.ledVermelho.turnOn();
      	my.ledVerde.turnOff();
      }
      else{
      		my.ledVerde.turnOn();
      		my.ledVermelho.turnOff();
      }

      
      if (anguloAtual > 180) {
        if(my.ledVermelho.turnOn())
          my.ledVerde.turnOff();

        if(my.ledVerde.isOn())
          my.ledVerde.turnOff();
        
        anguloAtual = 0;
      }

      my.servo.angle(anguloAtual);
    });
  }
}).start();