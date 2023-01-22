import { Validation } from './Validation';
import { Offer } from './Offer';

export interface Revenue {
  net: number;
  gross: number;
  spent: number;
  validations: Validation[];
  offer: Offer;
}
