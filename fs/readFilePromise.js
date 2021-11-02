const fs = require("fs").promises;
//fs모듈을 프로미스형식으로 변환해서 사용

fs.readFile(`./readme.txt`)
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });
