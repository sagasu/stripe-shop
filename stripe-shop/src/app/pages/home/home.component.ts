import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
      <app-child1></app-child1>
    </p>
  `,
  styles: [
  ]
})
export default class HomeComponent implements OnInit, OnChanges, DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  constructor() {
    console.log('constructor works! HomeComponent')
   }

  ngOnInit(): void {
    console.log('ngOnInit works! HomeComponent')
  }
  ngOnChanges(): void{
    console.log('ngOnChanges works! HomeComponent')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck works! HomeComponent')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit works! HomeComponent')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked works! HomeComponent')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit works! HomeComponent')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked works! HomeComponent')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy works! HomeComponent')
  }


}
