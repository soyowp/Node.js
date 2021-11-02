const http = require("http");
const fs = require("fs").promises;
const port = 3000;

http
  .createServer(async (req, res) => {
    try {
      const data = await fs.readFile(`./server2.html`);
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(data);
    } catch (err) {
      console.error(err);
      res.writeHead(500, { "Content-Type": "text/pain; charset = utf-8" });
      res.end(err.message);
    }
  })
  .listen(port, () => {
    console.log(`${port}번 포트에서 서버 대기중!`);
  });

//http상태코드
//200번대 - 성공을 알리는 코드
//300번대 - 이동을 알리는 코드
//400번대 - 오류코드
//500번대 - 서버오류
