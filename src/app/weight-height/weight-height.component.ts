import {
  Component,
  EventEmitter,
  Output,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weight-height',
  imports: [FormsModule],
  templateUrl: './weight-height.component.html',
  styleUrls: ['./weight-height.component.scss'],
})
export class WeightHeightComponent implements OnChanges {
  @Input() weight: number = 0;
  @Input() height: number = 0;

  @Output() weightChange = new EventEmitter<number>();
  @Output() heightChange = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['weight']) {
      this.weight = changes['weight'].currentValue;
    }
    if (changes['height']) {
      this.height = changes['height'].currentValue;
    }
  }

  increaseWeight() {
    this.weight++;
    this.weightChange.emit(this.weight);
  }

  decreaseWeight() {
    if (this.weight > 0) {
      this.weight--;
      this.weightChange.emit(this.weight);
    }
  }

  increaseHeight() {
    this.height++;
    this.heightChange.emit(this.height);
  }

  decreaseHeight() {
    if (this.height > 0) {
      this.height--;
      this.heightChange.emit(this.height);
    }
  }

  onWeightChange() {
    this.weightChange.emit(this.weight);
  }

  onHeightChange() {
    this.heightChange.emit(this.height);
  }
}
