import express from 'express';

import { textController } from '../controllers';

const textRoutes = express.Router();

textRoutes.post('/', textController.createText);
textRoutes.get('/:id/words', textController.getWordCount);
textRoutes.get('/:id/characters', textController.getCharacterCount);
textRoutes.get('/:id/sentences', textController.getSentenceCount);
textRoutes.get('/:id/paragraphs', textController.getParagraphCount);
textRoutes.get('/:id/longest-words', textController.getLongestWords);


export default textRoutes;
