import { BeforeEach, Errback, EvalScripts } from './types';
declare const injectElement: (el: Element | HTMLElement, evalScripts: EvalScripts, renumerateIRIElements: boolean, beforeEach: BeforeEach, withCredentials: boolean, callback: Errback) => void;
export default injectElement;
