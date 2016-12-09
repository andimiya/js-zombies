/*jshint esversion: 6 */

const chai = require('chai');
const expect = require('chai').expect;

chai.expect();
chai.should();

const Zombies = require('../zombies.js');

describe('Item', () => {

  var item;
  beforeEach(function(){
    item = new Zombies.item('Bob');
  });

  it('should be a class', function() {
    Zombies.item.should.be.a.function;
  });

  it('name should be a string',() => {
    item.name.should.be.a('string');
  });
});

describe('Weapon', () => {
  var item;
  beforeEach(function(){
    weapon = new Zombies.weapon('Sword', 12);
  });

  it('should be a class', function(){
    Zombies.weapon.should.be.a.function;
  });

  it('should extend from the Item Class',() => {
    weapon.should.be.instanceof(item);
  });

  it('name should be a string',() => {
    weapon.name.should.be.a('string');
  });

  it('damage should be a number',() => {
    weapon.damage.should.be.a('number');
  });
});