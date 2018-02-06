var sumAll = function(start, finish) {
    var sum = 0;
    if (typeof start !== "number" || typeof finish !== "number" || start < 0 || finish < 0){
        return "ERROR";
    } else if (start > finish){
        for (var i = finish;i<=start;i++){
        sum += i;
        }
        return sum;
    } else if (finish > start){
        for (var i = start;i<=finish;i++){
            sum += i;
        }
        return sum;
    }
    
}

module.exports = sumAll
