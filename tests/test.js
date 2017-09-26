const assert = require('chai').assert;
const app = require('../src/main.js');

describe("", function(){
	describe("handle valid input", function(){
		it("should return arithmetic for arithmetic sequence", function(){
			assert.equal(app.aritGeo([1,2,3,4]), 'Arithmetic');
		});
	})

	describe("handle valid input", function(){
		it("should return arithmetic for arithmetic sequence", function(){
			assert.equal(app.aritGeo([5, 7, 9, 11]), 'Arithmetic');
		});
	})


	describe("handle invalid input", function(){
		it("should return -1 for neither arithmetic nor geometric", function(){
			assert.equal(app.aritGeo([1,3,6,8]), -1);
		});
	})

	describe("handle invalid input", function(){
		it("should return -1 for neither arithmetic nor geometric", function(){
			assert.equal(app.aritGeo([7,15,0,8]), -1);
		});
	})
	describe("handle invalid input", function(){
		it("should return 0 for empty array", function(){
			assert.equal(app.aritGeo([]), 0);
		});
	})

	describe("handle valid  input", function(){
		it("should return geometric for aritGeo of geometric progression", function(){
			assert.equal(app.aritGeo([27, 9, 3, 1]), "Geometric");
		});
	})

	describe("handle valid  input", function(){
		it("should return geometric for aritGeo of geometric progression", function(){
			assert.equal(app.aritGeo([7, 14, 28]), "Geometric");
		});
	})

	describe("handle invalid  input", function(){
		it("should return -1 for aritGeo of string", function(){
			assert.equal(app.aritGeo(["y", "e", "l", "l", "o"]), "-1");
		});
	})

	describe("handle invalid  input", function(){
		it("should return -1 for aritGeo length equal to 1", function(){
			assert.equal(app.aritGeo([2]), -1);
		});
	})

	describe("handle valid  input", function(){
		it("should return -1 for aritGeo of length equal to 2", function(){
			assert.equal(app.aritGeo([3, 1]), -1);
		});
	})




})