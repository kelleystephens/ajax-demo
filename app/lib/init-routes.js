'use strict';

var traceur = require('traceur');
var dbg = traceur.require(__dirname + '/route-debugger.js');
var initialized = false;

module.exports = (req, res, next)=>{
  if(!initialized){
    initialized = true;
    load(req.app, next);
  }else{
    next();
  }
};

function load(app, fn){
  var home = traceur.require(__dirname + '/../routes/home.js');
  var calc = traceur.require(__dirname + '/../routes/calc.js');
  var games = traceur.require(__dirname + '/../routes/games.js');

  app.get('/', dbg, home.index);
  app.get('/sum', dbg, calc.addition);
  app.post('/sum', dbg, calc.sum);
  app.get('/power', dbg, calc.power);
  app.post('/power', dbg, calc.pow);
  app.get('/sumlist', dbg, calc.sumlist);
  app.post('/sumlist', dbg, calc.sl);
  app.get('/dice', dbg, games.dice);
  app.post('/dice', dbg, games.roll);
  app.get('/pairs', dbg, games.pairs);
  app.post('/pairs', dbg, games.match);
  app.get('/card', dbg, games.card);
  app.post('/card', dbg, games.getCard);

  console.log('Routes Loaded');
  fn();
}
