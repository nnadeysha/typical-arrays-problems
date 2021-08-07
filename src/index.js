
exports.min = function min (array) {
 if(!array || !array.length) return 0;
 let min = Math.min.apply(null, array);
 return min;
}

exports.max = function max (array) {
    if(!array || !array.length) return 0;
    let max = array.reduce(function(a, b) {
        return Math.max(a, b);
    });
    return max;
}

exports.avg = function avg (array) {
    if(!array || !array.length) return 0;
    return array.reduce((a, b) => a + b)/array.length;
}
