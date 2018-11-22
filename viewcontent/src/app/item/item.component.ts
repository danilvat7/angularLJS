import {
  Component,
  OnInit,
  ContentChild,
  AfterContentInit,
  ElementRef,
  ContentChildren,
  QueryList,
  AfterViewInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild
} from '@angular/core';
import { NestedComponent } from '../nested/nested.component';
import { BannerComponent } from '../banner/banner.component';
import { HostDirective } from '../host.directive';

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

  @ViewChild(HostDirective) host: HostDirective;

  myComponent;
  constructor(
    private view: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngAfterViewInit() {
    // console.log('ngAfterViewInit');
  }
  ngAfterContentInit() {
    // console.log('ngAfterContentInit');
    // console.log(this.headerElement.nativeElement);
    // console.log(this.nestedComponent);
  }
  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      BannerComponent
    );

    const instance = this.host.view.createComponent(componentFactory);
    instance.instance.title = 'Mega banner!';
    this.myComponent = BannerComponent;
  }
}
