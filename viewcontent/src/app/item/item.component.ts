import {
  Component,
  OnInit,
  ContentChild,
  AfterContentInit,
  ElementRef,
  ContentChildren,
  QueryList,
  AfterViewInit
} from '@angular/core';
import { NestedComponent } from '../nested/nested.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, AfterContentInit, AfterViewInit {
  // @ContentChild('h') headerElement: ElementRef;
  // @ContentChild(NestedComponent) nestedComponent: NestedComponent;
  @ContentChildren(NestedComponent, { read: NestedComponent })
  nestedComponent: QueryList<NestedComponent>;

  constructor() {}

  ngAfterViewInit() {
    // console.log('ngAfterViewInit');
  }
  ngAfterContentInit() {
    // console.log('ngAfterContentInit');
    // console.log(this.headerElement.nativeElement);
    console.log(this.nestedComponent);
  }
  ngOnInit() {}
}
