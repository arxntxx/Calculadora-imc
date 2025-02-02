import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-action-buttons',
  imports: [],
  templateUrl: './action-buttons.component.html',
  styleUrl: './action-buttons.component.scss'
})
export class ActionButtonsComponent {
  @Output() calculate = new EventEmitter<void>(); 
  @Output() reset = new EventEmitter<void>();    

  onCalculate() {
    this.calculate.emit();  
  }

  onReset() {
    this.reset.emit();   
  }

}
