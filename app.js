function Car(){
  this.x = 50;
  this.y = 50;

  this.drive = function( direction ){
    switch( direction ){
      case "right":
        this.x += 10;
        break;
      case "left":
        this.x += -10;
        break;
      case "straight":
        this.x += 0;
        break;
      case "left":
        this.y += 0;
        break;
      }
    }
}
