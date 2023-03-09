import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  template: `
    <p>
      child2 works!
    </p>
  `,
  styles: [
  ]
})
export class Child2Component implements OnInit, OnChanges, DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  constructor() { 
    console.log('constructor works! Child2Component')
  }

  ngOnInit(): void {
    console.log('ngOnInit works! Child2Component')
  }
  ngOnChanges(): void{
    console.log('ngOnChanges works! Child2Component')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck works! Child2Component')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit works! Child2Component')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked works! Child2Component')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit works! Child2Component')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked works! Child2Component')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy works! Child2Component')
  }
}
