/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let st = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let rev = st.split("").reverse().join("").toLowerCase();
  return rev === st;
};
