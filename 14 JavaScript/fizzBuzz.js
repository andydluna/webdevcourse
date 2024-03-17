var output = [];
var count = 1;

function fizzBuzz() {
    while (count <= 100) {
        var item = count++;
        
        if (item % 3 == 0 && item % 5 == 0) {
            item = "FizzBuzz";
        }
        else if (item % 3 == 0) {
            item = "Fizz";
        }
        else if (item % 5 == 0){
            item = "Buzz";
        }
        
        output.push(item);
    }

    console.log(output);
}