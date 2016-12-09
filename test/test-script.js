/*jshint esversion: 6 */

const chai = require('chai');

chai.expect();
chai.should();

const Zombies = require('../zombies.js');

describe('Item', () => {
  let item = Zombies.item;

  it('should be a class', () => {
    item.should.be.a.function;
  });

  it('should have a name', () => {
    item.name.should.equal(item.name);
  });

  it('name should be a string',() => {
    item.name.should.be.a.string;
  });


});