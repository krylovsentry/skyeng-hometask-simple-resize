import { InjectionToken } from "@angular/core";

export interface ResizableConfig {
  medium: number;
  large: number;
}

export const SIZE_CONFIG = new InjectionToken<ResizableConfig>('size.config')
