/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const arr = []

    for (let i = 0; i < s.length; i++) {
        console.log("s[i] : ", s[i]);
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            arr.push(s[i])
        } else {
            if (s[i] === ")" && arr[arr.length - 1] === "(" || s[i] === "}" && arr[arr.length - 1] === "{" || s[i] === "]" && arr[arr.length - 1] === "[") {
                arr.pop()
            } else {
                return false
            }
        }
    }

    return arr.length === 0
};
