const fs = require("fs");

fs.readFile(`./readme.txt`, (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data); //이러면 버퍼값을 읽어오기때문에
  console.log(data.toString()); //문자열로 바꿔서 처리해야 한다.
});
