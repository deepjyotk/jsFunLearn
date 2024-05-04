console.log("Namaste JavaScript");

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
   
    resolve("Resolve Promise 1");
  }, 20000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolve Promise 2");
  }, 50000);
});


async function handlePromise(){
  console.log("Hello World!");
  
  const r1 = await p1 ;

  console.log("R1 is: ",r1);

  const r2 = await p2 ;

  console.log("R2 is: ",r2);

}

function addTwoNumbers(r1,r2) {
  console.log('Addition of two numbers is ', r1+r2);
}

handlePromise();
addTwoNumbers(1,2)
