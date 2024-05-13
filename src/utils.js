// Your code here
export function isPalindrome(word){
    if(word.length === 0){
        return false
    } else if (!/^[A-Za-z]+$/.test(word)){
        throw new Error("Word contains special characters")
    }

    const backWord = word.split("").reverse().join("")
    
    return backWord.toLowerCase() === word.toLowerCase()
}