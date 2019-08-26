import {
  Component,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {

  @Input() id = 'checkbox';
  @Input() checked: boolean;

  @Output() check = new EventEmitter<boolean>();

  constructor() { }

  emitCheck(isChecked: boolean) {
    this.check.emit(isChecked);
  }

}
