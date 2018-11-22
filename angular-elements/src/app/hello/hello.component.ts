import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class HelloComponent implements OnInit {
  @Input() name;
  @Output() clicked = new EventEmitter();
  constructor() {}

  someMethod() {
    this.clicked.emit('CLICK!');
  }
  ngOnInit() {}
}
