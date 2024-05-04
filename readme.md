## Async Await in JS

### Js a synchronous single threaded language.

#### How async/await works? --> index.js
- await will wait for the promise to get resolved.
- Does this mean that JS engine is waiting? No, JS just suspends the current execution of the async function, 
  and removes it from call stack, so that rest functions could be handled properly without any freezing.
- But, as soon as the promise is resolved, JS brings back the function to call stack, with keeping track of line it 
    was executing when it suspended it earlier.


#### How fetch works in JS? --> index2.js
    - fetch() --> returns a promise of Response
    - res = await fetch() --> now, res contains the response body.
    - json  = await res.json() --> res.json() returns the promise of JsonValue, and once the promo



#### what is the difference between async/await and Promise.then()/.catch()?
- async/await is the syntatic sugar over Promise.then/catch, 
- easier to read the code with async/await syntax, no chaining of .then()



## Hoisting:
    - access variables, and functions, even beffore we have initialized it.