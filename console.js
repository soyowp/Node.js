const string = "abc";
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: "value",
    },
  },
};

console.time(`전체시간`);
console.log(`평범한 로그`);
console.error(`에러메세지 출력로그`);
console.table([
  //테이블도 출력이 가능하다.
  { name: `김씨`, birth: 1999 },
  { name: `박씨`, birth: 2000 },
]);

console.dir(obj, { colors: false, depth: 2 }); // 객체를 표현가능
console.dir(obj, { colors: true, depth: 1 });

console.time(`여기가 같아야 동작`);
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.timeEnd(`여기가 같아야 동작`); //시작과 끝 문자열이 같아야함

function b() {
  console.trace("여기가 문젠가");
}
function a() {
  b();
}
a();
console.timeEnd("전체 시간");
