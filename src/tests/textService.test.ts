import { expect } from 'chai';
import { describe, it } from 'mocha';
import { textServices } from '../services';

describe('Test', () => {

    it('countWords should accurately return the word count.', () => {
        const text = "In the quiet dusk, where shadows blend.";
        expect(textServices.countWords(text)).to.be.equal(7);
    });

    it('countCharacters should accurately return the character count.', () => {
        const text = "Echo through the fields, gently they sway,Carrying tales of night and day";
        expect(textServices.countCharacters(text)).to.be.equal(35);
    });

    it('countSentences should return the correct sentence count', () => {
        const text = "The quick brown fox jumps over the lazy dog. The lazy dog slept in the sun.";
        expect(textServices.countSentences(text)).to.be.equal(2);
    });

    it('countParagraphs should correctly determine the number of paragraphs', () => {
        const text = "The quick brown fox jumps over the lazy dog.\nThe lazy dog slept in the sun.";
        expect(textServices.countParagraphs(text)).to.be.equal(2);
    });

    it('longestWordInParagraphs should return the longest word in each paragraph', () => {
        const text = "The quick brown fox jumps over the lazy dog.\nThe lazy dog slept in the sun.";
        expect(textServices.longestWordInParagraphs(text)).to.be.equal(["jumps", "slept"]);
    })

})


// import { expect } from 'chai';
// import { analyzeText } from '../src/textService'; // Adjust path as per your project structure


