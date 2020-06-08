import fs from "fs";
import { OutputTarget } from "./OutputTarget";

export class HtmlReport implements OutputTarget {
  constructor(public outputPath: string) {}

  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
      </div>
    `;
    fs.writeFileSync(this.outputPath, html);
  }
}
