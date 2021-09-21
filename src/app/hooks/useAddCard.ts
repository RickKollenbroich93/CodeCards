import useLocalStorage from './useLocalStorage';
import type { CodeCard } from '../types';

export default function useCodeCard(): {
  codeCards: CodeCard[];
  addCodeCard: (codeCard: CodeCard) => void;
  removeCodeCard: (newCodeCard: CodeCard) => void;
} {
  const [codeCards, setCodeCards] = useLocalStorage<CodeCard[]>(
    'codeCards',
    []
  );

  function addCodeCard(codeCard: CodeCard) {
    setCodeCards([...codeCards, codeCard]);
  }

  function removeCodeCard(newCodeCard: CodeCard) {
    setCodeCards(codeCards.filter((codeCard) => codeCard !== newCodeCard));
  }

  return { codeCards, addCodeCard, removeCodeCard };
}
