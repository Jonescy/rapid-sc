/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    // interface Element extends VNode {}
    // tslint:disable no-empty-interface
    // interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
  interface Window {
    ethereum?: {
      isMetaMask?: true
      isOpera?: true
      isTrust?: true
      providers?: any[]
      request?: (...args: any[]) => Promise<void>
      on?: (...args: any[]) => void
    }
    BinanceChain?: {
      bnbSign?: (
        address: string,
        message: string
      ) => Promise<{ publicKey: string; signature: string }>
    }
  }
}
