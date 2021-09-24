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

  function removeCodeCard(newCodeCard: CodeCards) {
    setCodeCards(
      codeCards.filter(
        (codeCard) =>
          codeCard.content !== newCodeCard.content &&
          codeCard.title !== newCodeCard.title
      )
    );
  }
  function editCodeCard(oldCodeCard: CodeCards, newCodeCard: CodeCards) {
    setCodeCards([
      ...codeCards.filter((codeCard) => codeCard.title !== oldCodeCard.title),
      newCodeCard,
    ]);
  }

  return { codeCards, addCodeCard, removeCodeCard, editCodeCard };
}
