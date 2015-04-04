var Stats = require('Stats')
  , properties = require('../properties');

module.exports = function(game) {

  var boot = {};

  boot.create = function () {

    if (properties.showStats) {
      addStats();
    }

    //Set world size to populate initially
    game.world.width = 3000;
    game.world.height = 3000;
    game.world.setBounds(0, 0, 3000, 3000); //Don't forget to setBounds so the camera follows

    game.sound.mute = properties.mute;

    game.state.start('preloader');
  };


  function addStats() {
    var stats = new Stats();

    stats.setMode(0);

    stats.domElement.style.position = 'absolute';
    stats.domElement.style.right = '0px';
    stats.domElement.style.top = '0px';

    document.body.appendChild(stats.domElement);

    setInterval(function () {
      stats.begin();
      stats.end();
    }, 1000 / 60);
  }

  return boot;
};
