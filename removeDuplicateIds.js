/**
 * Given the array of objects, remove the second and subsequent occurrences of duplicate IDS.
 * 
 * INPUT: [
 * {id:1, name: "JOHN"},
 * {id:2, name: "AJAY"}, <-- id = 2;
 * {id:3, name: "MANISH"},
 * {id:2, name: "RASHMI"}, <-- id = 2 // Remove this one
 * ]
 * 
 * OUTPUT: [
 * {id:1, name: "JOHN"},
 * {id:2, name: "AJAY"},
 * {id:3, name: "MANISH"},
 * ]
 */

const family = [
    { id: 1, name: "JOHN" },
    { id: 2, name: "AJAY" },
    { id: 3, name: "MANISH" },
    { id: 2, name: "RASHMI" }
]

function filterUniqueFamily(arrayOfObj, key) {
    return arrayOfObj.filter((element,index,array) => {
        // console.log(array.map((mapItem)=> mapItem[key])); // [ 1, 2, 3, 2 ]
        return array.map((mapItem)=> mapItem[key]).indexOf(element[key])=== index;
    })
}

const result = filterUniqueFamily(family, 'id');
console.log(result);

