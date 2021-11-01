//이제 콜백헬에서 탈출해보도록 하자

let process = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('비동기임!!!!!!!!!!!!');
      resolve(); //resolve를 넣어줘야 동기 작동된다.
    }, 1000);
  });
}

let process2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('비동기2임!!!!!!!!!!!!');
      resolve();
    }, 500);
  });
}

let process3 = () => {
  return new Promise((resolve, reject) => {
    reject(new Error('에러야!'));
  })
}

process()
  .then(() => process3()).catch(() => console.log("에러가 나부러쓰!")) //에러 출몰시 .catch로 캐치 가능!
  .then(() => process())
  .then(() => process2())
  .then(() => process())
  .then(() => process2())
  .then(() => process());
