type Option = {
    id: number;
    name: string;
    alias: string;
}

type Question = {
  id: number;
  question: string;
  options: Option[];
}

type Result = {
  [key: string]: string;
}

type Character = {
  id: string;
  name: string;
  photo: string;
}

type Data = {
  id: number;
  title: string;
  paragraph: string;
  photoCover: string;
  questions: Question[];
  results: Result;
  character: Character[];
}

export {
    Data,
    Option,
    Question,
    Result,
    Character  
} 
  