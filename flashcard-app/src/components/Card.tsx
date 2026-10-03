// within a card, a user will choose the english translation out of 2 options
type TLWords = {
  targetLanguage: string;
  vocabList: [{ targetWord: string; translation: string }];
};

export type Flashcard = {
  targetLanguage: string;
  targetWord: string;
  correctTranslation: string;
  incorrectTranslation: string;
};

// need a helper function that adds the correct and incorrect words to a single card
