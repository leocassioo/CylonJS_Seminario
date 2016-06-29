var Cylon = require('cylon');

Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/cu.usbmodemFD111' }
  },

  devices: {
    servo: { driver: 'servo', pin: 9 }
  },

  work: function(my) {
    var angle = 0 ;
    my.servo.angle(angle);
    every((0.5).second(), function() {
      angle = angle + 45 ;
      if (angle > 180) {
        angle = 0
      }
      my.servo.angle(angle);
    });
  }
}).start();