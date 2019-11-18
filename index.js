function writeCards(nameArr, eventName) {
    let message = [];

    for (let i = 0; i < nameArr.length; i++) {
        message.push(`Thank you, ${nameArr[i]}, for the wonderful ${eventName} gift!`);
    }
    return message;
}

function countDown(startNum) {
    while (startNum > 0) {
        console.log(startNum);
        startNum -= 1;
    }
    console.log(startNum);
}
