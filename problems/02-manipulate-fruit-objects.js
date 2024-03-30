/**************DO NOT MODIFY THIS LINE BELOW*****************/
const fruits = require('../fruit-data')

/* 07. `addKeyAndValueToAll()` - Return the fruits array, adding the given key and
value to each fruit object

console.log(addKeyAndValueToAll(fruits, "inStock", true));
// returns array of 31 fruits, and each fruit object includes "inStock: true"
*/

function addKeyAndValueToAll(array, key, value) {
    // Your code here 
    let newArr = [];
    array.forEach((item) => {
        let { ...newItem } = { ...item, ...{ [key]: value } };
        newArr.push(newItem);
    })
    return newArr;
}
/* 08. `addKeyAndValueToOne()` - Return object at the given index array, adding the given key and
value to that fruit object

console.log(addKeyAndValueToOne(fruits, "color", "red", 1));
// returns first object ("Apple"), including "color: red"
*/

function addKeyAndValueToOne(array, key, value, index) {
    // Your code here 
    let item = array[index];
    let newItem = { ...item, ...{ [key]: value } }
    return newItem;
}

/* 09. `updateKeyName()` - Change the old key name to the new key name in all
objects, and return the resulting array.
HINT: Can you make a copy of the old key and value, and then delete the original?

console.log(updateKeyName(fruits, "nutritions", "nutrition"));
// returns fruits array, but every "nutritions" key had changed to "nutrition"
*/

function updateKeyName(array, oldKey, newKey) {
    // Your code here 
    array.forEach((item) => {
        for (let key in item) {
            if (key === oldKey) {
                item[newKey] = item[oldKey];
                delete item[oldKey];
            }
        }
    })
    return array;
}

/* 10. `updateIdValues()` - Change all of the "id" values to six-character
strings, and return an array of all of the new id values.
For example: 1 becomes "000001", and 31 becomes "000031"

console.log(updateIdValues(fruits));
// returns a list of 31 id, in six-character string format:
// [ '000006', '000035', '000001', '000064', '000033', '000009', '000060',
    '000068', '000069', '000047', '000072', '000037', '000066', '000026',
    '000044', '000065', '000067', '000027', '000041', '000002', '000042',
    '000070', '000004', '000052', '000010', '000071', '000023', '000003',
    '000005', '000073', '000025' ];
*/

function updateIdValues(array) {
    // Your code here 
    let idArr = [];

    array.forEach((item) => {
        idArr.push(item.id.toString());
    });

    // let newIdArr = [];
    idArr.forEach((el,i) => {
        const initialLength = el.length;
        if (initialLength < 6) {
            for (let i = 1; i <= 6 - initialLength; i++) {
                el = '0'+ el;
                // console.log(el);
            }
        }
        // newIdArr.push(el);
        idArr[i] = el
    })
    return idArr;
}

/* 11. `deleteKeysandValues()` - Delete the keyToDelete from the nutritions
object from every fruit, and return the array.

console.log(deleteKeysAndValues(fruits, "sugar"));
// returns fruits array, but every "nutritions" key no longer has a "sugar" key
*/

function deleteKeysAndValues(array, keyToDelete) {
    // Your code here 
    array.forEach((item) => {
        for (let key in item) {
            if (typeof item[key] === 'object') {
                // console.log(item[key]keyToDelete);
                delete item[key][keyToDelete];
            }
        }
    })
    return array;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [addKeyAndValueToAll, addKeyAndValueToOne, updateKeyName, updateIdValues, deleteKeysAndValues];
