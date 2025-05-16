function fibonacci(n) {
  console.log(`---------------n = ${n}------------------`);
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    console.log(`fib[${i}] = fib[${i - 1}] + fib[${i - 2}]`);
    console.log(`fib[${i}] = ${fib[i - 1]} + ${fib[i - 2]}`);
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(fib);
  console.log("---------------------------------");
}

// Big-O = O(n) since there is a single loop that will traverse `n` number of times

fibonacci(2); // [0,1] -> Loop will not run
fibonacci(3); // [0,1,1] -> Loop will run once: n = 3, so fib[2] = fib[1] + fib[0]]
fibonacci(7); // [0,1,1,2,3,5,8] See below

/*
        ---------------n = 2------------------
        [ 0, 1 ]
        
        ---------------n = 3------------------
        fib[2] = fib[1] + fib[0]
        fib[2] = 1 + 0
        [ 0, 1, 1 ]
        
        ---------------n = 7------------------
        fib[2] = fib[1] + fib[0]
        fib[2] = 1 + 0
        fib[3] = fib[2] + fib[1]
        fib[3] = 1 + 1
        fib[4] = fib[3] + fib[2]
        fib[4] = 2 + 1
        fib[5] = fib[4] + fib[3]
        fib[5] = 3 + 2
        fib[6] = fib[5] + fib[4]
        fib[6] = 5 + 3
        [ 0, 1, 1, 2, 3, 5, 8 ]
    ---------------------------------
*/
