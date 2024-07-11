import { Request, Response } from 'express';
import { Text } from '../models/textModel';
import { textServices } from '../services';
// import redisClient from '../config/redisClient';

export const createText = async (req: Request, res: Response) => {
    const { content } = req.body;
    const newText = new Text({ content });
    await newText.save();
    res.status(201).json(newText);
};

export const getWordCount = async (req: Request, res: Response) => {
    const { id } = req.params;
    const text = await Text.findById(id);
    if (!text) return res.status(404).json({ error: 'Text not found' });

    const wordCount = textServices.countWords(text.content);
    // await redisClient.setEx(id, 3600, JSON.stringify({ wordCount }));

    res.json({ wordCount });
};

export const getCharacterCount = async (req: Request, res: Response) => {
    const { id } = req.params;
    const text = await Text.findById(id);
    if (!text) return res.status(404).json({ error: 'Text not found' });

    const characterCount = textServices.countCharacters(text.content);
    // await redisClient.setEx(id, 3600, JSON.stringify({ characterCount }));

    res.json({ characterCount });
};

export const getSentenceCount = async (req: Request, res: Response) => {
    const { id } = req.params;
    const text = await Text.findById(id);
    if (!text) return res.status(404).json({ error: 'Text not found' });

    const sentenceCount = textServices.countSentences(text.content);
    // await redisClient.setEx(id, 3600, JSON.stringify({ sentenceCount }));

    res.json({ sentenceCount });
};

export const getParagraphCount = async (req: Request, res: Response) => {
    const { id } = req.params;
    const text = await Text.findById(id);
    if (!text) return res.status(404).json({ error: 'Text not found' });

    const paragraphCount = textServices.countParagraphs(text.content);
    // await redisClient.setEx(id, 3600, JSON.stringify({ paragraphCount }));

    res.json({ paragraphCount });
};

export const getLongestWords = async (req: Request, res: Response) => {
    const { id } = req.params;
    const text = await Text.findById(id);
    if (!text) return res.status(404).json({ error: 'Text not found' });

    const longestWords = textServices.longestWordInParagraphs(text.content);
    // await redisClient.setEx(id, 3600, JSON.stringify({ longestWords }));

    res.json({ longestWords });
};


export default {
    createText,
    getWordCount,
    getCharacterCount,
    getSentenceCount,
    getParagraphCount,
    getLongestWords
}