import { AfterViewInit, Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ResizeableService } from './resizeable.service';

@Directive({
  selector: '[ifViewportSize]'
})
export class ViewportDirective implements AfterViewInit {

  @Input() ifViewportSize: string;

  constructor(
    private el: ElementRef,
    private resizeableService: ResizeableService
    ) {
    }

  ngAfterViewInit(): void {
    this.resizeableService.sizeObs().subscribe((size) => {
      console.log(size);
      console.log(this.ifViewportSize);

      this.el.nativeElement.style.display = this.ifViewportSize === size ? 'block': 'none';
    });
  }

}