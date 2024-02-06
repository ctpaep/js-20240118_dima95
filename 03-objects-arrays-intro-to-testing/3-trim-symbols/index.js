/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
   if (!string || size === 0) {
     return ""
   }

   if(![...arguments].find((element) => element === size)){
     return string
   }
  let result = '';
  let currentChar = '';
  let currentCount = 0;

  for (const char of string) {
    if (char !== currentChar) {
      currentChar = char;
      currentCount = 1;
      result += char;
    } else {
      currentCount++;
      if (currentCount <= size) {
        result += char;
      }
    }
  }

  return result;

}
