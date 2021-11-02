const fs = require("fs").promises;

fs.writeFile(`./writeMe.txt`, `이걸 입력해줘`) //없으면 생성까지 해준다
  .then(() => {
    return fs.readFile(`./writeMe.txt`);
  })
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });
