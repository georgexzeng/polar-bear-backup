
'use strict';
function Menu() {}

Menu.prototype = {
  preload: function() {

  },
  create: function() {
    this.background = this.game.add.sprite(0, 0, 'background');
    this.ground = this.game.add.tileSprite(0, 400, 335, 112, 'ground');
    this.ground.autoScroll(-200, 0);

    this.titleGroup = this.game.add.group();

    this.title = this.game.add.sprite(0,0,'title');
    this.titleGroup.add(this.title);

    this.bird = this.game.add.sprite(200,5,'bird');
    this.titleGroup.add(this.bird);

    this.bird.animations.add('flap');
    this.bird.animations.play('flap', 12, true);

    this.titleGroup.x = 30;
    this.titleGroup.y = 0;

    this.game.add.tween(this.titleGroup).to({y:15}, 350, Phaser.Easing.Linear.NONE, true, 0, 1000, true);

  },
  update: function() {

  }
};

module.exports = Menu;
