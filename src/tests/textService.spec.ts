import { expect } from 'chai';
import { describe, it } from 'mocha';
import { textServices } from '../services';

describe('Test', () => {

    // it('countWords should return the correct word count', () => {
    //     const text = "The quick brown fox jumps over the lazy dog.";
    //     expect(countWords(text)).toBe(9);
    // });

    // it('countCharacters should return the correct character count', () => {
    //     const text = "The quick brown fox jumps over the lazy dog.";
    //     expect(countCharacters(text)).toBe(35);
    // });

    it('countSentences should return the correct sentence count', () => {
        const text = "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.";
        expect(textServices.countSentences(text)).to.be.equal(2);
    });

    // it('countParagraphs should return the correct paragraph count', () => {
    //     const text = "The quick brown fox jumps over the lazy dog.\nThe lazy dog slept in the sun.";
    //     expect(countParagraphs(text)).toBe(2);
    // });

    // it('longestWordInParagraphs should return the longest word in each paragraph', () => {
    //     const text = "The quick brown fox jumps over the lazy dog.\nThe lazy dog slept in the sun.";
    //     expect(longestWordInParagraphs(text)).toEqual(["jumps", "slept"]);
    // })

})
