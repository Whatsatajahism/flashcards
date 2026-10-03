import { type Flashcard } from "./Card";

// A user should be able to scroll horizontally across the cards.
// Should be correct pile and incorrect pile (state of correct/incorrect)
// once correct a minimum num of times, move to learnt pile
// could be a tab of 'learnt'/saved vocab

type CardContainer = {
  flashcards: Flashcard[];
};
