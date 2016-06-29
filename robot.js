var Cylon = require('cylon');

Cylon.robot({
  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/cu.usbmodemFD111' },
  },

  devices: {
    led: { driver: 'led', pin: 13 },
    led2: {driver: 'led', pin: 12},
  },

  work: function(my) {
    every((1).second(), function()
    {
      my.led.toggle()
      //my.led2.toggle()
    });
  }


  arduino.forEach(function(bot) {
  Cylon.robot({
    name: bot.name,

    connections: {
      arduino: { adaptor: "firmata", port: bot.port }
    },

    devices: bot.devices,

    work: function(my) {
      console.log(my.name + " is online");
    }
  });
}).start();