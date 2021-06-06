import { animate, style, transition, trigger } from '@angular/animations';

export module Animations {

  export function hidenHeightAnimation() {
    return trigger(
      'hidenHeightAnimation',
      [
        transition(
          ':enter',
          [
            style({ height: 0 }),
            animate('0.2s ease-out',
              style({ height: "fit-content" }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ height: "fit-content" }),
            animate('0.2s ease-in',
              style({ height: 0 }))
          ]
        )
      ]
    )
  }
}
