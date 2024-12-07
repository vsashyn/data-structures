/**
 * Find top 3 duplicates
 * @param {string} array
 * @returns
 */
function calcDuplicates(array) {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    if (typeof map[array[i]] === "undefined") {
      map[array[i]] = 1;
    } else {
      map[array[i]] += 1;
    }
  }
  return Object.keys(map)
    .sort((k, k2) => {
      if (map[k] > map[k2]) {
        return -1;
      } else {
        return 1;
      }
    })
    .slice(0, 3);
}

var input = ["S1", "S1", "S1", "S2", "S2", "S3", "S3", "S4"];
console.log(calcDuplicates(input)); // { 'S1': 3, 'S2': 2, 'S3': 2 }
