// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];


const writeCards = function(name, run){
    let giftMsgs = [];
    for (let i = 0; i < names.length; i++){
        let sms = `Thank you, ${name[i]}, for the wonderful ${run} gift!`
        giftMsgs.push(sms);
    }

    return giftMsgs;
}


writeCards(names, "surprise")


const countDown = function(b){
    let a = b;
    while(a>= 0){
        console.log(a);
        --a
    }

}

countDown(10)