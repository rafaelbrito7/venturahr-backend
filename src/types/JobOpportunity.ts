import { ICriteria } from './Criteria';
import { IFieldDefault } from './FieldDefault';

interface IJobOpportunityFields {
  role: string;
  city: string;
  formOfContract: string;
  criterias: Array<ICriteria>[];
}

type IJobOpportunity = IFieldDefault & IJobOpportunityFields;

export type { IJobOpportunityFields, IJobOpportunity };
