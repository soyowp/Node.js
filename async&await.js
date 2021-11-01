const twosec = () => {
    return new Promise((resolve, reject) => { //promise를 선언
        setTimeout(() => {
            resolve('resolved');    //내보낼값 resolve
        }, 2000)
    })
}

const process = async () => {
    console.log(`호출`);
    const result = await twosec(); //실행결과를 result에 담기
    console.log(result);
    console.log(`끝`);
};

process();
