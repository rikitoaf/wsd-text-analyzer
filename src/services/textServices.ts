import { PageResult, PaginationModel } from '../common/types';

import { Text } from '../models';

export const countWords = (text: string): number => {
  return text.split(/\s+/).filter(word => word).length;
};

export const countCharacters = (text: string): number => {
  return text.replace(/\s+/g, '').length;
};

export const countSentences = (text: string): number => {
  return text.split(/[.!?]/).filter(sentence => sentence.trim()).length;
};

export const countParagraphs = (text: string): number => {
  return text.split(/\n+/).filter(paragraph => paragraph.trim()).length;
};

export const longestWordInParagraphs = (text: string): string[] => {
  return text.split(/\n+/).map(paragraph => {
      return paragraph.split(/\s+/).reduce((longest, current) => {
          return current.length > longest.length ? current : longest;
      }, '');
  });
};

export default {
  countWords,
  countCharacters,
  countSentences,
  countParagraphs,
  longestWordInParagraphs
};
