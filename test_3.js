function isIsogram(str) {
    return str.split("").every(function(c, i) {
        str.indexOf(c) == i
    });
} 
var checkIsogram = isIsogram("isogram");
console.log(checkIsogram)