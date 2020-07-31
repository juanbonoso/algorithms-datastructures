const LongestWordRegex = (sen) => {
    const regEx = /[\w]+/g;
    let res;
    let largestWord = '';
    do {
        res = regEx.exec(sen);
        if (res) {
            if (res[0].length > largestWord.length) largestWord = res[0];
            console.log(res[0], res[0].length);
        }
    } while (res);
    return largestWord;
};

const LongestWordArray = (sen) => {
    const isLetter = (char) => (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z');
    let largestWord = '';
    let findingWord = '';
    for (let i = 0; i < sen.length; i++) {
        if (isLetter(sen[i])) findingWord += sen[i];
        else findingWord = '';
        if (findingWord.length > largestWord.length) largestWord = findingWord;
    }
    return largestWord;
};

const input = 'fun&!! time';
console.log(LongestWordRegex(input));
