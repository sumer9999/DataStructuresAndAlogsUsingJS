const exampleData = { 'apple': 100, 'app': 99, 'amazon': 88, 'boy': 74, 'bob': 50, 'book': 77, 'abc': 89, 'base': 80, 'blah': 10, 'ape': 9 };
// getTop3('a') => ['apple', 'app', 'abc']
// getTop3('ap') => ['apple', 'app', 'ape']
// getTop3('b') => ['base', 'boy', 'bob']

function processData(exampleData) {
    let quickObj = {};
    let arrKeys = Object.keys(exampleData).sort();
    for (let key of arrKeys) {
        for (let i = 1; i < key.length; i++) {
            let substr = key.slice(0, i);
            for (let key1 of arrKeys) {
                if (regex.test(key1)) {
                    if (quickObj[substr] && quickObj[substr].length < 3) {
                        //Find the order of insertion;
                        for (let val of quickObj[substr]) {
                            if (exampleData[val] < exampleData[key1]) {
                                quickObj[substr].push(key1);
                                break;
                            }
                        }
                    }
                    else quickObj[substr] = [key1];
                }
            }

        }
        return quickObj;
    }

    let obj = processData(exampleData);
    console.log(obj);

// function getTop3(exampleData){



// }


// getTop3('a')


// design a type ahead system, when user enters a prefix, system will suggest the top 3 most popular keywords
// a => 'amazon', 'apple', 'apps'
// 
//databse with work rank
// let userHistory = {
//     'books' : 4
//     'amazon':2


// }

//a => 'amazon', 'apple', 'apps'
// apple => 'apple', 'appleseed', 'applesouce'

// 'apple seed'

// Example