var assert = require('chai').assert;
var expect = require('chai').expect;
var Todo = require('../models/todo');

describe("Todo", function() {
  it("Can create a todo", function() {
    //Arrange
    var aTodo = new Todo();
    //Act
    //Assert
    assert.isOk(aTodo);
  });
  xit("has error without a name", function(done) {
    //Arrange
    var aTodo = new Todo();
    aTodo.validate(function(err) {
      expect(err.errors.name).to.exist;
      done();
    });
  });
});
