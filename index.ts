import { Parser } from "cxml";
import * as neuroml2 from "./xmlns/www.neuroml.org/schema/neuroml2";
export * from "./xmlns/www.neuroml.org/schema/neuroml2";


export function parse(neuromlStr: string): neuroml2.document {
    return Parser.parse(neuromlStr);
}
