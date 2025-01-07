import { Component, signal } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'app-login',
    imports: [MatFormFieldModule, FormsModule, MatButtonModule, MatCardModule, MatIconModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  login(){

  }

    hide = signal(true);
    clickEvent(event: MouseEvent) {
      this.hide.set(!this.hide());
      event.stopPropagation();
    }

  }



