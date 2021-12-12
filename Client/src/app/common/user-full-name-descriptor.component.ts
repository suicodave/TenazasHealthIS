import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-full-name-descriptor',
  template: ` <p>user-full-name-descriptor works!</p> `,
})
export class UserFullNameDescriptorComponent implements OnInit {
  @Input() email: string = '';

  fullName: string = '';
  constructor() {}

  ngOnInit(): void {}
}
