// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", ()=>{
    it("returns true if word reads same forwards and backwards", ()=>{
        const word = "racecar"
        const palindrome = isPalindrome(word)

        expect(palindrome).toBe(true)
    })
    it("returns false if word reads different forwards and backwards", ()=>{
        const word = "car"
        const palindrome = isPalindrome(word)

        expect(palindrome).toBe(false)
    })
    it("handles uppercase and lowercase letters", ()=>{
        const word = "rAcEcaR"
        const palindrome = isPalindrome(word)
        expect(palindrome).toBe(true)
    })
    it("returns false for an empty string", ()=>{
        const word = ""
        const palindrome = isPalindrome(word)

        expect((palindrome)).toBe(false)
    })
    it("throws an error if input has any non-alphabetical characters", ()=>{
        expect(()=>isPalindrome("123")).toThrow()
        expect(()=>isPalindrome("Hello, world!")).toThrow()
        expect(()=>isPalindrome("race car!")).toThrow()
    })
    it("throws an error if input is not a string", ()=>{
        expect(()=>isPalindrome(1111)).toThrow()
        expect(()=>isPalindrome(null)).toThrow()
        expect(()=>isPalindrome(true)).toThrow()

    })
})