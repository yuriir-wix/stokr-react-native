declare module 'remx' {
  import * as React from 'react';
  type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
  export interface HOC<TInner, TOuter> {
    <P extends TInner>(component: React.ComponentType<P>): React.ComponentType<
      Omit<P, keyof TInner> & TOuter
    >;
  }
  export function connect<TInner, TOuter>(
    createProps: (a: TOuter) => TInner,
  ): HOC<TInner, TOuter>;
  export function getters<T extends {}>(g: T): T;
  export function state<T extends {}>(s: T): T;
  export function setters<T extends {}>(s: T): T;
}
