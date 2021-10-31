//프로미스를 공부하기 전에 콜백함수를 알아보자
//ajax의 비동기처리에서 순서가 안맞을때 사용

let one = `첫번째`;
let two = `두번째`;
let three = `세번째`;

const output = (str, wait) => {
  setTimeout(() => {
    console.log("outPut :", str);
  }, wait);
};

console.log(`start`);
output(one, 500);
output(two, 300);
output(three, 100);
console.log(`end`);

//이러면 순서가 엉켜서 출력된다.
//이 순서를 바로잡으려고 사용하는 것.

const process = (str2, wait2, callback) => {
  setTimeout(() => {
    console.log("outPut2 :", str2);
    callback(); //이 위치에서 끝나면 무엇을 실행할지 설정해주는것이 콜백함수.
  }, wait2);
};

//그래서 이걸 콜백헬이라고 함...
process(one, 500, () => {
  process(two, 300, () => {
    process(three, 100, () => {});
  });
});
