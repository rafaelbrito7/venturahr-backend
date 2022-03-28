import { IFieldDefault } from './FieldDefault';

interface IAnswerFields {
  date: Date;
  index: number;
}

type IAnswer = IFieldDefault & IAnswerFields;

export type { IAnswerFields, IAnswer };
