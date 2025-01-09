import { Component } from '@angular/core';
import { signal } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-register',
    imports: [MatFormFieldModule, FormsModule, MatButtonModule, MatCardModule, MatIconModule, MatInputModule, RouterLink],
    templateUrl: './register.component.html',
    styleUrl: './register.component.css'
})
export class RegisterComponent {

}
