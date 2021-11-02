const http = require("http");
const port = 3000;

const server = http
  .createServer((req, res) => {
    //리퀘스트 , 리스폰스
    res.writeHead(200, { "Content-Type": "text/html; charset = utf8" }); //응답에 대한 정보를 기록
    res.write("<h1>Hello NodeServer</h1>"); //클라이언트에 보낼 데이터
    res.end("<p>Hello Server!!!</p>"); //응답 종료시 보낼 데이터
  })
  //   .listen(port, () => {
  //     //3000번 포트로 서버 연결!
  //     console.log(`${port}번 포트에서 서버 대기중!`);
  //   });

  .listen(port);

server.on("listening", () => {
  console.log(`${port}번 포트에서 서버 대기중!`);
});
server.on("error", () => {
  console.error(err);
});
