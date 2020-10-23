function customFindIdex(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }

    return -1;
}

function testFindIndex(array, findValue, exeptResult) {
    let trueResult = customFindIdex(array, findValue);
    console.log(`исходный массив - [${array}], значение которое необходимо найти ${findValue}, ожидаемый результат ${exeptResult}, полученный результат ${trueResult}`)

    if (trueResult === exeptResult) {
        console.log('(Тест пройден)')
    }
    else {
        console.log('(Тест не пройден)')
    }

}

testFindIndex([2, 3, 6, 1, 54, 21, 3], 6, 2)
testFindIndex([2, -1, 67, 0, 12, 67, 4], 67, 2)
testFindIndex([3], 3, 0)
testFindIndex([], 1, -1)
testFindIndex([3], 2, -1)




/////////////////////////////////////////////////////////////////////

function customForEach(array, calcFunc) {
    if (array.length < 1) {
        return -1;
    }

    for (let i = 0; i < array.length; i++) {
        array[i] = calcFunc(array[i])
    }

    return array;
}

function testForEach(array, calcFunc, exeptResult) {
    let trueResult;
    console.log(`исходный массив - [${array}], что делать с елементом ${calcFunc}, ожидаемый результат ${exeptResult} ; полученный результат ${trueResult = customForEach(array, calcFunc)}`)
    let result = '(Тест пройден)';

    for (let i = 0; i < exeptResult.length; i++) {
        if (exeptResult[i] != trueResult[i]) {
            result = '(Тест не пройден)';
            break;
        }
    }

    console.log(result);

}

testForEach([2, 3, 6, 1, 54, 21, 3], (item) => item - 1, [1, 2, 5, 0, 53, 20, 2])
testForEach([2, 6, 1, 54, 21, 3], (item) => item * 10, [20, 60, 10, 540, 210, 30])
testForEach([], (item) => item * 2, -1)


/////////////////////////////////////////////////////////////////////////////////



function customFilter(array, conditionFunc) {
    if (array.length < 1) {
        return -1;
    }

    let resultArr = [];

    for (let i = 0; i < array.length; i++) {
        if (conditionFunc(array[i])) {
            resultArr.push(array[i])
        }
    }

    return resultArr;
}

function testFilter(array, conditionFunc, exeptResult) {
    let trueResult;
    console.log(`исходный массив - [${array}], условие ${conditionFunc}, ожидаемый результат ${exeptResult} ; полученный результат ${trueResult = customFilter(array, conditionFunc)}`)
    let result = '(Тест пройден)';

    for (let i = 0; i < exeptResult.length; i++) {
        if (exeptResult[i] != trueResult[i]) {
            result = '(Тест не пройден)';
            break;
        }
    }

    console.log(result);

}

testFilter([2, 3, -2, 1, -3, 8], (value) => (value >= 0) ? true : false, [2, 3, 1, 8])
testFilter([2, 3, -2, 1, -3, 8], (value) => (value <= 0) ? true : false, [-2, -3])
testFilter([], (value) => (value === 0) ? true : false, -1)