import { IAnswer } from './Answer';
import { IFieldDefault } from './FieldDefault';

interface ICriteriaFields {
  description: string;
  profile: string;
  weight: number;
  answers: Array<IAnswer>[];
}

type ICriteria = IFieldDefault & ICriteriaFields;

export type { ICriteria, ICriteriaFields };
