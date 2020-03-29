var moveZeros = function (arr) {
    function zero(zero) {
        return zero === 0;
    }
    function greaterThanZero(number) {
        return number !== 0;
    }
    const zeroArr = arr.filter(zero);
    const nonZeroArr = arr.filter(greaterThanZero);
    return nonZeroArr.concat(zeroArr);
}