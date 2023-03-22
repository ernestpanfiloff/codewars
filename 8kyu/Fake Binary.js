/* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string   */


function fakeBin(x) {
    // Convert to an array
    let array = x.split("")

    // Loop through every element
    for (let i = 0; i < array.length; i++) {
        // If digit below 5 repalce with "O"
        if (array[i] < 5) {
            array[i] = 0
        } else if (array[i] >= 5) {
            array[i] = 1
        }
    }

    // Join array
    x = array.join("")

    return x
}