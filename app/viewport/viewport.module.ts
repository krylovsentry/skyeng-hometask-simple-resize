import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewportDirective } from './viewport.directive';
import { ResizeableService } from './resizeable.service';
import { ResizableConfig, SIZE_CONFIG } from './resizable-config';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ViewportDirective],
  declarations: [ViewportDirective]
})
export class ViewportModule {
   static forRoot(config: ResizableConfig): ModuleWithProviders {
    return {
      ngModule: ViewportModule,
      providers: [
        { provide: SIZE_CONFIG, useValue: config },
        ResizeableService,
      ]
    };
  }
}