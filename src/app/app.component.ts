import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DashComponent } from "./dash/dash.component";
import { fadeAnimation } from './route-animations';

@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet, DashComponent],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    animations:[fadeAnimation]
})
export class AppComponent {
  title = 'Fed-Friend';

}
