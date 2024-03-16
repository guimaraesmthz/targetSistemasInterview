function Fibonacci(number){

    fibonacciSequence = [];
    for(let i = 0; i <= 10000; i++){
        if(i == 0){fibonacciSequence.push(0)};
        if(i == 1){fibonacciSequence.push(1)};
        if(i >= 2){
            soma  = fibonacciSequence[i-1] + fibonacciSequence[i-2];
            fibonacciSequence.push(soma);
            if(soma > number){
                i = 10001;
                console.log("Não pertence à sequência.");
            };
            if(fibonacciSequence[i] == number){
                i = 10001;
                console.log("Pertence à sequência.");
            };
        };
    };
};

Fibonacci(21);