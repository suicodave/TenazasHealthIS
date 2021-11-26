import { Directive, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';

@Directive()
export class RoleBasedComponent implements OnDestroy {
  constructor(protected auth: AuthService) {
    this.isAdmin();
    this.isEditor();
    this.isAuditor();
  }

  subscription = new Subscription();

  isAdminRole: boolean = false;
  isEditorRole: boolean = false;

  isAuditorRole: boolean = false;

  isAdmin() {
    this.subscription = this.auth.isAdmin.subscribe(
      (x) => (this.isAdminRole = x)
    );
  }

  isEditor() {
    this.subscription = this.auth.isEditor.subscribe(
      (x) => (this.isEditorRole = x)
    );
  }

  isAuditor() {
    this.subscription = this.auth.isAuditor.subscribe(
      (x) => (this.isAuditorRole = x)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
