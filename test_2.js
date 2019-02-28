(function print1To100() {
    for (var i =1; i<=100; i++ ) {
        const multipleOf3 = (i % 3 == 0) ? i : null;
        const multipleOf5 = (i % 5 == 0) ? i : null;
        const both = (i % 3 == 0 && i % 5 == 0) ? i : null
        switch (i) {
            case multipleOf3: 
                console.log("Fizz")
                break;
            case multipleOf5:
            console.log("Buzz")
                break;   
            case both:
                console.log("FizzBuzz")
                    break;    
            default:
            console.log(i)    
        }
    }
})()