/**
 * Time complexity: O(n), since we use matches variable
 * @param {*} s1
 * @param {*} s2
 * @returns True if s2 has permutation of s1
 */
export const checkInclusion = (s1, s2) => {
  let map1 = {};
  let map2 = {};

  if (s1.length > s2.length) return false;

  // map1 init
  for (let i = 97; i < 97 + 26; i++) {
    map1[String.fromCharCode(i)] = 0;
  }
  // map2 init
  for (let i = 97; i < 97 + 26; i++) {
    map2[String.fromCharCode(i)] = 0;
  }
  // reflect map1 with real letters
  for (let i = 0; i < s1.length; i++) {
    map1[s1[i]]++;
  }

  // reflect map2 with real letters of s1.length size
  for (let i = 0; i < s1.length; i++) {
    map2[s2[i]]++;
  }

  // Let's calculate matches. Should be 26 if sliding window has same permutation as s1.
  let matches = 0;

  Object.keys(map1).forEach((letter) => {
    if (map1[letter] === map2[letter]) {
      matches++;
    }
  });

  let l = 0;

  // Use 2 pointers to move sliding window.
  for (let r = s1.length; r < s2.length; r++) {
    if (matches === 26) return true;

    map2[s2[r]]++;

    if (map2[s2[r]] === map1[s2[r]]) {
      matches++;
    } else if (map2[s2[r]] === map1[s2[r]] + 1) {
      matches--;
    }

    map2[s2[l]]--;

    if (map2[s2[l]] === map1[s2[l]]) {
      matches++;
    } else if (map2[s2[l]] === map1[s2[l]] - 1) {
      matches--;
    }
    l++;
  }

  if (matches === 26) return true;

  return false;
};
