

// code for 3d vector class here

class Vector3 {
  constructor(x=0, y=0, z=0) {

    this.x = x;
    this.y = y;
    this.z = z;
  }

  //adding vector given in argument to current vector
  add(vector) {
    return new Vector3(this.x + vector.x, this.y + vector.y, this.z + vector.z);
  }

  //subtracting vector given in argument from current vector
  subtract(vector) {
    return new Vector3(this.x - vector.x, this.y - vector.y, this.z - vector.z);
  }

  //multiplying current vector by the vector given in argument
  mult(vector) {
    return new Vector3(this.x * vector.x, this.y * vector.y, this.z * vector.z);
  }
  //dividing current vector by the vector given in argument
  div(vector) {
    return new Vector3(this.x/vector.x, this.y/vector.y, this.z/vector.z);
  }

  //finding the magnitude of current vector
  magnitude() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z));
  }

  //normalizing a vector by dividing the x, y, and z by magnitude
  normalize() {
    var mag = this.magnitude();
    return new Vector3(this.x/mag, this.y/mag, this.z/mag);
  }

  //checking the distance between current vector and given vector in argument
  distance(vector) {
    var xValue = this.x - vector.x;
    var yValue = this.y - vector.y;
    var zValue = this.z - vector.z;

    return Math.sqrt((xValue * xValue) + (yValue * yValue) + (zValue * zValue));
  }

  //limiting a vector to a certain number as to not continue gaining velocity
  limit(number) {
    var vector;
    if(this.mag() > number) {
      vector = this.normalize().mult(new Vector3(number, number, number));
    }else {
      vector = this;
    }

    return vector;
  }
}
