import { AngularFirestore } from '@angular/fire/firestore';
import { Pipe, PipeTransform } from '@angular/core';
import { USER } from './collection-names';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user/user-table.component';

@Pipe({
  name: 'userFullname',
})
export class UserFullnamePipe implements PipeTransform {
  constructor(private firestore: AngularFirestore) {}
  transform(email: string, ...args: unknown[]): Observable<string> {
    return this.firestore
      .collection<User>(USER, (ref) => {
        return ref.where('email', '==', email);
      })
      .valueChanges({ idField: 'id' })
      .pipe(
        map((users: User[]) => {
          const user = users[0];
          return `${user.firstName} ${user.lastName} (${user.email})`;
        })
      );
  }
}
