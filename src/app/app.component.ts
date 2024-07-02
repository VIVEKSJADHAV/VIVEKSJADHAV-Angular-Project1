import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookingFormComponent } from './booking-form/booking-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookingFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Hotel Booking';
}
