const timeout = setTimeout(() => {
  console.log("timeout 1sec");
}, 1000);

const inverval = setInterval(() => {
  console.log("interval 1sec");
}, 1000);

const immediate = setImmediate(() => {
  console.log("즉시 실행");
});
