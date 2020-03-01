// function upperCaser(input) {
//     // SOLUTION GOES HERE
//     return input.toUpperCase();
//   }

// module.exports = upperCaser

// function repeat(operation, num) {
//     if (num <= 0) return
//     operation()
//     return repeat(operation, --num)
//   }

//   module.exports = repeat

// function doubleAll(numbers) {
//     var result = []
//    result = numbers.map(num => num *2);
//     return result
//   }

//module.exports = doubleAll

//   function getShortMessages(messages) {
//     // SOLUTION GOES HERE


//     return messages.filter(mes => mes.message.length < 50).map(m => {return m.message});
//   }

// //   module.exports = getShortMessages

// function checkUsersValid(goodUsers) {
//     return function allUsersValid(submittedUsers) {
//       return submittedUsers.every(function (submittedUsers) {
//           return goodUsers.some(function (goodUser) {
//               return submittedUsers.id === goodUser.id
//           })
//       });
//     };
//   }

//   module.exports = checkUsersValid

// var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
// console.log(countWords(inputWords))



function countWords(inputWords) {
//     // SOLUTION GOES HERE

//     var obj = {};

    return inputWords.reduce((acc, cur) => {
        //let arr = Object.keys(acc);
        if (cur in acc) {
            acc[cur]++;
            return acc;
        } else {
            acc[cur] = 1;
            return acc;
            // {}
            // {cur: 1}
            // {apple : 1}
            // {banana : 1, apple: 1}
        }
    }, {})
}

module.exports = countWords

// function reduce(arr, fn, initial) {
//     // SOLUTION GOES HERE
//     return arr.reduce((prev, curr, index, arr) => {
//         return prev + curr;

//     },0)
//   }
  
//   module.exports = reduce