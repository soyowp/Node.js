//클래스 사용 가능. 타 언어와 다르게 프로토타입 기반이기때문에
//시각적으로 클래스형태로 나타낸것에 불과하다고 이해하면 된다.

class Animals {
  constructor(name) {
    //생성자 지정
    this.name = name;
  }

  info() {
    //기능1
    console.log(`내이름은 ${this.name}`);
  }
  roar() {
    //기능2
    console.log("울부짖었다!");
  }
}

class Beast extends Animals {
  constructor(name) {
    super(name);
  }
  bite() {
    //Beast 추가기능 1
    console.log("물어뜯었다!");
  }
}

let tiger = new Beast("호랭이"); //Beast속성의 호랭이라는 이름으로 생성

tiger.info(); //내이름은 호랭이
tiger.bite(); //물어뜯었다!
tiger.roar(); //울부짖었다!
