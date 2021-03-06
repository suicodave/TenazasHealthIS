import { Patient } from './../patient/patient-table.component';
import { EngagementTypeItem } from './../engagement-type/engagement-type-item.component';
import { Timestamp } from '@firebase/firestore-types';
import { AuditableModel } from './../common/dto';
export interface Engagement extends AuditableModel {
  engagementDate: Timestamp;

  weight: number;

  height: number;

  systolicBloodPressure: number;

  diastolicBloodPressure: number;

  temperature: number;

  engagementType: EngagementTypeItem;

  patient: Patient;

  story: string;
}
