const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let arrayLetters = expr.match(/.{1,10}/g);
    let newArray = [];
    for (let letter of arrayLetters) {
        newArray.push(letter.match(/.{1,2}/g));
    }

    function removeItemAll(arr, value) {
        let i = 0;
        while (i < arr.length) {
            if (arr[i] === value) {
                arr.splice(i, 1);
            } else {
                ++i;
            }
        }
        return arr;
    }

    let index;
    let encodedArray = [];
    for (let item of newArray) {
        removeItemAll(item, '00');
        for (index = 0; index <= item.length - 1; ++index) {
            if (item[index] === '10') { item[index] = '.'; }
            if (item[index] === '11') { item[index] = '-'; }
        }
        encodedArray.push(item.join(''));
    }

    for (index = encodedArray.length - 1; index >= 0; --index) {
        encodedArray[index] = MORSE_TABLE[encodedArray[index]];
        if (encodedArray[index] === undefined) { encodedArray[index] = ' '; }
    }

    return encodedArray.join('');
}

module.exports = {
    decode
}