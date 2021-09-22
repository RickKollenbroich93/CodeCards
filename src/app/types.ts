export type Collection = {
  name: string;
  language: string;
  onClick?: () => void;
};
export type CodeCard = {
  title: string;
  language: string;
  content: string;
  collections: { children: string; language: string }[];
};
