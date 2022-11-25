
//immediately invoked function expression ou IIFE

(function helloWorld() {
    alert('Hello, world');
}
)();

(function (message) {
    alert(message);
}
)('Hello, world');

// Arrow fuctions

// function sum(a) {
//     return a + 10;
// }

const sum = a => a + 100

console.log(sum(8))

//exemplo com map()

const materials = [
    'Hydrogem',
    'Helium',
    'Lithium',
    'Beryllium'
];

const newArray = materials.map(
    function showLength(materials) {
        return materials.length
    }
);

//const newArray = materials.map(material => material.length)
console.log(newArray)