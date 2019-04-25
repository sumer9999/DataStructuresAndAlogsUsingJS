function longestWord(str) {
    const longestWord = str.trim().split(/\W+/)
        .reduce((acc, word) => acc.length > word.length ? acc : word);
    return longestWord;
}


console.log(longestWord('   This Is a beautiful soup   '));




// function LongestWord(str) { 
//     let maxWord = str.split(/\W+/).reduce((maxWord,word)=>{
//         if(word.length > maxWord.length) maxWord = word;
//         return maxWord;
//     },'');
//     return maxWord;
// }
// LongestWord(readline());        