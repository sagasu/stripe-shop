import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `
    <p>
      child1 works!
      {{title}}
    </p>
    <button (click)="onSave()">save me</button>

    <input type="text" [name]="title">

    <app-child2><app-child2>
  `,
  styles: [
  ]
})
export class Child1Component implements OnInit, OnChanges, DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  constructor() {
    console.log('constructor works! Child1Component')
   }

  title:string = 'Child one title';

  ngOnInit(): void {
    console.log('ngOnInit works! Child1Component')
  }

  ngOnChanges(): void{
    console.log('ngOnChanges works! Child1Component')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck works! Child1Component')
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit works! Child1Component')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked works! Child1Component')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit works! Child1Component')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked works! Child1Component')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy works! Child1Component')
  }

  onSave(): void{
    console.log('onSave works! Child1Component')
  }
}
