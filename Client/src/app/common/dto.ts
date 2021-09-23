import { Timestamp } from '@firebase/firestore-types';

export interface AuditableModel {
  createdBy: string;

  id?: string;

  createdAt: Timestamp;
}
