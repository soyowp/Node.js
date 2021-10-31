//둘 다 사용 가능하다.

function func() {
  console.log(`기존 펑션`);
}

const func2 = () => console.log("애로우펑션");

func();

func2();
