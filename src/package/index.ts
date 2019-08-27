import { initCache } from './polyfill/hmrCache';
import { overrideCustomElementDefine } from './polyfill/overrideCustomElementDefine';
export { reflowDOM } from './utils/reflowDOM';
export { defineCustomElement } from './decorator/xdefineCustomElement';
export { onCustomElementChange } from './polyfill/onCustomElementChange';

export function applyPolyfill() {
    initCache();
    overrideCustomElementDefine();
}