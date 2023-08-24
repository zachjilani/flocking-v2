const Vector3 = require('./vector3');

describe('Vector3', () => {
  it('should add two vectors correctly', () => {
    const vector1 = new Vector3(1, 2, 3);
    const vector2 = new Vector3(4, 5, 6);
    const result = vector1.add(vector2);
    expect(result).toEqual(new Vector3(5, 7, 9));
  });

  it('should subtract two vectors correctly', () => {
    const vector1 = new Vector3(1, 2, 3);
    const vector2 = new Vector3(4, 5, 6);
    const result = vector1.subtract(vector2);
    expect(result).toEqual(new Vector3(-3, -3, -3));
  });

  it('should multiply two vectors correctly', () => {
    const vector1 = new Vector3(3, 4, 5);
    const vector2 = new Vector3(2, 2, 2);
    const result = vector1.mult(vector2);
    expect(result).toEqual(new Vector3(6, 8, 10));
  });

  it('should divide two vectors correctly', () => {
    const vector1 = new Vector3(4, 4, 6);
    const vector2 = new Vector3(2, 2, 2);
    const result = vector1.div(vector2);
    expect(result).toEqual(new Vector3(2, 2, 3));
  });

  //TODO: probably should limit digits after decimal points
  it('should calculate vectors magnitude correctly', () => {
    const vector1 = new Vector3(2, 3, 4);
    const result = vector1.magnitude()
    expect(result).toEqual(5.385164807134504);
  });

  it('should normalize vectors correctly', () => {
    const vector1 = new Vector3(2, 3, 4);
    const result = vector1.normalize();
    expect(result).toEqual(new Vector3(0.3713906763541037,0.5570860145311556,0.7427813527082074));
  });

  it('should calculate distance between two vectors correctly', () => {
    const vector1 = new Vector3(2, 3, 4);
    const vector2 = new Vector3(1, 2, 3);
    const result = vector1.distance(vector2);
    expect(result).toEqual(1.7320508075688772);
  });


  it('should limit vector magnitude correctly', () => {
    const vector = new Vector3(3, 4, 5);
    const limited = vector.limit(4);
    expect(limited.magnitude()).toBeLessThanOrEqual(4);
  });
});
