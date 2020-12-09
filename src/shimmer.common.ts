import { ContentView } from '@nativescript/core/ui';
import { Property } from '@nativescript/core';

export class Shimmer extends ContentView {
  public enabled: boolean = true;
}

export const enabledProperty = new Property<Shimmer, boolean>({
  name: 'enabled'
});
enabledProperty.register(Shimmer);