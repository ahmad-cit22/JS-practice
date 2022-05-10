//! Codeforces problem solving : 2 (too long words)

var n = readline();
for (let i = 0; i < n; i++) {
    var word = readline();
    var lenOfWord = word.length;


    if (lenOfWord > 10) {
        var partOne = word.slice(0, 1);
        var partTwo = word.slice(-1);
        var finalOutput = partOne + (lenOfWord - 2) + partTwo;
        console.log(finalOutput);
    } else {
        console.log(word)
    }

}