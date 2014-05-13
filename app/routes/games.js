'use strict';

var _ = require('lodash');

exports.dice = (req, res)=>{
  res.render('games/dice', {title: 'Roll'});
};

exports.roll = (req, res)=>{
  var num = _.random(1, 6);
  res.send({side:num});
};

exports.pairs = (req, res)=>{
  res.render('games/pairs', {title: 'Roll Dice'});
};

exports.match = (req, res)=>{
  var num1 = _.random(1, 6);
  var num2 = _.random(1, 6);
  var win = (num1 === num2) ? 'YES!' : 'NO!';
  res.send({num1:num1, num2:num2, win:win});
};

exports.card = (req, res)=>{
  res.render('games/card', {title: 'Get Card'});
};

exports.getCard = (req, res)=>{
  var card = _.random(1, 13) * -72;
  var suit = _.random(0, 3) * -110;

  res.send({suit:suit, card:card});

};
