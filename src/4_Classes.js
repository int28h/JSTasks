/*
 * Create a Polygon class that has the following properties:
 * A constructor that takes an array of integer values describing the lengths of the polygon's sides.
 * A perimeter() method that returns the polygon's perimeter.
 * Locked code in the editor tests the Polygon constructor and the perimeter method. 
 */
function Polygon (array) {
    this.lengths = array;
    
    this.perimeter = function() {
        var result = 0;
        for (let i = 0; i < this.lengths.length; i++) {
            result += this.lengths[i];
        }
        return result;
    }
}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());