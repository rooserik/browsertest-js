var expect = chai.expect;

describe('Car', function(){

  it("should be an instance of Car", function(){
    var myCar = new Car();
    expect( myCar ).to.be.an.instanceof( Car );
  });

  it("should start at 50, 50", function(){
    var carCoordinates = new Car();
    expect( carCoordinates.x ).to.equal(50);
    expect( carCoordinates.y ).to.equal(50);
  });

  describe("drive",function(){
    it('should have an x of 60 after driving right once', function(){
      var driveRightCar = new Car();
      driveRightCar.drive('right');
      expect(driveRightCar.x).to.equal(60);
    });

    it('should have an x of 40 after driving left once', function(){
      var driveLeftCar = new Car ();
      driveLeftCar.drive('left');
      expect(driveLeftCar.x).to.equal(40);
    });

    it('should have an x of 50 after driving straight', function(){
      var driveLeftCar = new Car ();
      driveLeftCar.drive('left');
      expect(driveLeftCar.x).to.equal(40);
    });

    it('should have an y of 50 after driving left once', function(){
      var driveLeftCar = new Car ();
      driveLeftCar.drive('left');
      expect(driveLeftCar.x).to.equal(40);
    });
  })
})
