import { Timestamp } from '@firebase/firestore-types';

export class AuditableModel {
  createdBy: string = '';

  id?: string;

  createdAt: Timestamp | null = null;
}
