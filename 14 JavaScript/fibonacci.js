function fibonacciGenerator (n) {
    var fibonacciSequence = [];
    
    for (var i = 0; i < n; i++) {
        if (i == 0) {
            fibonacciSequence.push(0);
        }
        else if (i == 1) {
            fibonacciSequence.push(1);
        }
        else {
            fibonacciSequence.push(fibonacciSequence[i-2] + fibonacciSequence[i-1]);
        }
    }
    
    return fibonacciSequence;
}
    
    