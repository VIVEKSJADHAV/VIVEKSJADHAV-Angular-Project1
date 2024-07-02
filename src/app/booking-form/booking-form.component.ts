import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule ,FormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.scss'
})
export class BookingFormComponent implements OnInit {
  
  popupVisible = true;
  bookingForm = new FormGroup({
    checkin: new FormControl<string>(''),
    checkout: new FormControl<string>(''),
    adults: new FormControl<number>(0),
    children: new FormControl<number>(0),
    name: new FormControl<string>(''),
    email: new FormControl<string>(''),
    phone: new FormControl<string>(''),
    
 }) ;
  
  constructor(private formBuilder: FormBuilder) {

   }

  ngOnInit(): void {
   
  }
  get f() { return this.bookingForm.controls; }
  
 
  onSubmit() {
    console.log(this.bookingForm.valid);
    if (this.bookingForm.valid) {
     
      const popup = document.getElementById('popup');
      if (popup) {
        popup.style.display = 'block';
      }
      
    }
  }


  closePopup() {
    const popup = document.getElementById('popup');
    if (popup) {
      popup.style.display = 'none';
    }
    this.bookingForm.reset();
  }

}