//이제 콜백헬에서 탈출해보도록 하자
let one = `첫번째`;
let two = `두번째`;
let three = `세번째`;

const test = (str, timer) => {
  setTimeout(() => {
    console.log(str);
  }, timer);
};

// test(one, 1000);
// test(two, 700);
// test(three, 400);

const process = (str, timer) => new Promise((resolve, reject) => {});
