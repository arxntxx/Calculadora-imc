import { Component } from '@angular/core';
import { WeightHeightComponent } from '../weight-height/weight-height.component';
import { FormsModule } from '@angular/forms';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';
import { ResultsComponent } from '../results/results.component';
import { UserData } from '../userdata.interface';

@Component({
  selector: 'app-form',
  imports: [
    WeightHeightComponent,
    FormsModule,
    ActionButtonsComponent,
    ResultsComponent,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  user: UserData = {
    name: '',
    gender: 'Hombre',
    weight: 0,
    height: 0,
    bmi: 0,
  };

  results: string[] = [];

  updateWeight(newWeight: number) {
    this.user.weight = newWeight;
  }

  updateHeight(newHeight: number) {
    this.user.height = newHeight;
  }

  calculate() {
    if (this.user.height > 0 && this.user.weight > 0) {
      const heightInMeters = this.user.height / 100;
      this.user.bmi = this.user.weight / (heightInMeters * heightInMeters);

      let message = '';
      if (this.user.bmi < 18.5) {
        message = 'Por debajo del peso';
      } else if (this.user.bmi >= 18.5 && this.user.bmi < 25) {
        message = 'Peso normal';
      } else {
        message = 'Sobrepeso';
      }

      this.results.push(
        `${this.user.name}, ${
          this.user.gender
        }: ${message} (IMC: ${this.user.bmi.toFixed(2)})`
      );
    } else {
      alert('Por favor introduzca peso y altura válidos');
    }
  }

  resetForm() {
    this.user = {
      name: '',
      gender: 'Hombre',
      weight: 0,
      height: 0,
      bmi: 0,
    };
  }
}
