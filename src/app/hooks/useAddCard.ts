import useLocalStorage from './useLocalStorage';
import type { CodeCards } from '../types';

export default function useCodeCard(): {
  codeCards: CodeCards[];
  addCodeCard: (codeCard: CodeCards) => void;
  removeCodeCard: (newCodeCard: CodeCards) => void;
  editCodeCard: (oldCodeCard: CodeCards, newCodeCard: CodeCards) => void;
} {
  const [codeCards, setCodeCards] = useLocalStorage<CodeCards[]>(
    'codeCards',
    []
  );

  function addCodeCard(codeCard: CodeCards) {
    setCodeCards([...codeCards, codeCard]);
  }

  function removeCodeCard(removeCodeCard: CodeCards) {
    setCodeCards(
      codeCards.filter(
        (codeCard) =>
          codeCard.content !== removeCodeCard.content &&
          codeCard.title !== removeCodeCard.title
      )
    );
  }
  function editCodeCard(deleteCodeCard: CodeCards, newCodeCard: CodeCards) {
    setCodeCards([
      ...codeCards.filter(
        (codeCard) => codeCard.title !== deleteCodeCard.title
      ),
      newCodeCard,
    ]);
  }

  return { codeCards, addCodeCard, removeCodeCard, editCodeCard };
}
