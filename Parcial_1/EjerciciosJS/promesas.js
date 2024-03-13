function my_promise_1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promesa 1");
    }, 1000);
  });
}

function my_promise_2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promesa 2");
    }, 2000);
  });
}

function my_promise_3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promesa 3");
    }, 3000);
  });
}

Promise.race([my_promise_1(), my_promise_2(), my_promise_3()])
  .then((res) => {
    console.log(res);
  })
  .catch((error) => console.log(error));
