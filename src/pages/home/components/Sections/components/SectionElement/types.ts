import { Character } from "redux/characters/types";

export interface SectionProps {
  title: string;
  elements: any[];
  onClick: (character: Character) => void;
  listEpisode : any[];
}
