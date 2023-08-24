

// code for 3d vector class here

class Vector3 {
  constructor(x=0, y=0, z=0) {

    this.x = x;
    this.y = y;
    this.z = z;
  }

  add(vector) {
    return new Vector3(this.x + vector.x, this.y + vector.y, this.z + vector.z);
  }

  subtract(vector) {
    return new Vector3(this.x - vector.x, this.y - vector.y, this.z - vector.z);
  }

  mult(vector) {
    return new Vector3(this.x * vector.x, this.y * vector.y, this.z * vector.z);
  }

  div(vector) {
    return new Vector3(this.x/vector.x, this.y/vector.y, this.z/vector.z);
  }

  magnitude() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z));
  }

  normalize() {
    var mag = this.magnitude();
    return new Vector3(this.x/mag, this.y/mag, this.z/mag);
  }

  distance(vector) {
    var xValue = this.x - vector.x;
    var yValue = this.y - vector.y;
    var zValue = this.z - vector.z;

    return Math.sqrt((xValue * xValue) + (yValue * yValue) + (zValue * zValue));
  }

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
