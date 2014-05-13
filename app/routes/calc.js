'use strict';


exports.addition = (req, res)=>{
  res.render('calc/addition', {title: 'Get Sum'});
};

exports.sum = (req, res)=>{
  var answer = (req.body.num1 * 1) + (req.body.num2 * 1);
  res.send({sum:answer});
};

exports.power = (req, res)=>{
  res.render('calc/power', {title: 'Get the Power'});
};

exports.pow = (req, res)=>{
  var num1 = (req.body.num1 * 1);
  var num2 = (req.body.num2 * 1);
  var answer = Math.pow(num1, num2);
  res.send({result:answer});
};

exports.sumlist = (req, res)=>{
  res.render('calc/sumlist', {title: 'Get Sum of List'});
};

exports.sl = (req, res)=>{
  var nums = req.body.nums;
  nums = nums.split(',').map(n=>n.trim());
  var total = 0;
  nums.forEach(n=>{
    total += (n * 1);
  });
  res.send({result:total});
};
