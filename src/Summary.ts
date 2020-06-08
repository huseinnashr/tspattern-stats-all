import { Analyzer } from "./analyzers/Analyzer";
import { OutputTarget } from "./outputTargets/OutputTarget";
import { MatchData } from "./MatchData";

import { HtmlReport } from "./outputTargets/HtmlReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";

export class Summary {
  static winsAnalysisWithHtmlReport(team: string, outputPath: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport(outputPath));
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
