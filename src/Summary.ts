import { Analyzer } from "./analyzers/Analyzer";
import { OutputTarget } from "./outputTargets/OutputTarget";

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
}
