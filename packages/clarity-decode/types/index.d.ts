import * as Core from "./core";
import * as Data from "./data";
import * as Diagnostic from "./diagnostic";
import * as Layout from "./layout";
import * as Interaction from "./interaction";
import * as Performance from "./performance";
import { InteractionEvent } from "./interaction";
import { Data as DataJS} from "clarity-js";
import { DataEvent } from "./data";

export function decode(data: string): Data.DecodedPayload;

export function decodeInteraction(tokens: DataJS.Token[]): InteractionEvent ;

export function decodeData(tokens: DataJS.Token[]): DataEvent;

export { Core, Data, Diagnostic, Layout, Interaction, Performance };
