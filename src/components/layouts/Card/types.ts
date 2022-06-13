export interface CardElementProps {
  id: number;
  title: string;
  status: string;
  species: string;
  image:string;
  onClick: (id: number) => void;
  labelButton:string;
  disabled:boolean;
}
