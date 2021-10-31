const test = {
  lname: ["김", "이", "박", "최"],
  fname: "길동",

  gildongs() {
    //애로우평션은 this를 사용 가능하다.
    this.lname.forEach((lname) => {
      console.log(lname, this.fname);
    });
  },
};

test.gildongs();
