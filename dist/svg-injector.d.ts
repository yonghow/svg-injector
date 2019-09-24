import { AfterAll, BeforeEach, Errback, EvalScripts } from './types';
declare type Elements = HTMLCollectionOf<Element> | NodeListOf<Element> | Element | null;
interface OptionalArgs {
    afterAll?: AfterAll;
    afterEach?: Errback;
    beforeEach?: BeforeEach;
    evalScripts?: EvalScripts;
    renumerateIRIElements?: boolean;
    withCredentials?: boolean;
}
declare const SVGInjector: (elements: Elements, { afterAll, afterEach, beforeEach, evalScripts, renumerateIRIElements, withCredentials, }?: OptionalArgs) => void;
export default SVGInjector;
