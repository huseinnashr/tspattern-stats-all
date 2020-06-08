import { Analyzer } from "./analyzers/Analyzer";
import { OutputTarget } from "./outputTargets/OutputTarget";
import { MatchData } from "./MatchData";

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
