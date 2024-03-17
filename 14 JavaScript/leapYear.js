function isLeap(year) {
    var result = "Not leap year.";
    
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                result = "Leap year.";
            }
        }
        else {
            result = "Leap year.";
        }
    }
    
    return result;
}

isLeap(2000);