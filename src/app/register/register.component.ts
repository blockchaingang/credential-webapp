import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {Registration} from './registration';
import {RegistrationService} from './registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  registration = new Registration('', '', '', 'Member');
  roles = ['Member', 'Authority', 'Reviewer'];


  constructor(private registrationService: RegistrationService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.registrationService.register(this.registration).subscribe( r => {
      console.log(r);
    });
  }

}
