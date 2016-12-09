/*jshint esversion: 6 */

const chai = require('chai');

chai.expect();
chai.should();

const Zombies = require('../zombies.js');

describe('Item', () => {

  let item = Zombies.item;

  // let item = new Zombies.item(12);  //Testing if my tests are right
  // let item = new Zombies.item('Bob');  //Testing if my tests are right

  it('should be a class', () => {
    item.should.be.a.function;
  });

  it('name should be a string',() => {
    item.name.should.be.a('string');
  });
});
