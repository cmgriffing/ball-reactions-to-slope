// A polar coordinate is an object that contains
// a magnitude (m) and a direction (theta).
// A nice visual intro is at:
// https://www.mathsisfun.com/polar-cartesian-coordinates.html

// Only adding polar coordinates is used here. Other abilities
// such as converting polar to cartesian coordinates can easily
// be added if needed at some other stage.

const polar = (function polar() {
    Math.TAU = 2 * Math.PI;
    const degToRad = (deg) => deg * Math.TAU / 360;
    const radToDeg = (rad) => rad * 360 / Math.TAU;

    // The code to add two polar coordinates together is sourced from
    // https://math.stackexchange.com/questions/1365622/adding-two-polar-vectors
    function addPolar({polar1, polar2}) {
        return {
            m: Math.sqrt(
                Math.pow(polar1.m, 2) + Math.pow(polar2.m, 2) +
                2 * polar1.m * polar1.m * Math.cos(
                    polar2.theta - polar1.theta
                )
            ),
            theta: polar1.theta + Math.atan2(
                polar2.m * Math.sin(
                    polar2.theta - polar1.theta
                ),
                polar1.m + polar2.m * Math.cos(
                    polar2.theta - polar1.theta
                )
            )
        };
    }
    return {
        fromDeg: degToRad,
        toDeg: radToDeg,
        add: addPolar
    };
}());
