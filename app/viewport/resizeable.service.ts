import { Inject, Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, config,  Observable, Subject } from 'rxjs';
import { ResizableConfig, SIZE_CONFIG } from './resizable-config';

@Injectable()
export class ResizeableService {

  private timerId: number;
  private SIZE_SUBJECT = new BehaviorSubject<string>('small');

  constructor(
    @Inject(SIZE_CONFIG) config: ResizableConfig,
    private zone: NgZone) {
    this.zone.runOutsideAngular(() => {
      window.addEventListener("resize", () => {
        clearTimeout(this.timerId);
        this.timerId = window.setTimeout(() => { 
          this.SIZE_SUBJECT.next(this.countSize(config));
        }, 300);
      });
      
    }); 
  }

  public sizeObs(): Subject<string> {
    return this.SIZE_SUBJECT;
  }

  private countSize(config: ResizableConfig): string {
    let size: string;
    if (window.innerWidth < config.medium) {
        size = 'small';
    } else if (window.innerWidth >= config.medium && window.innerWidth < config.large){
        size = 'medium';
    } else {
        size = 'large';
    }
    return size;
  }
}