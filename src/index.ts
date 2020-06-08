import { CsvFileReader } from "./dataReaders/CsvFileReader";
import { MatchReader } from "./MatchReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { HtmlReport } from "./outputTargets/HtmlReport";

const reader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(reader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new HtmlReport("report.html")
);

summary.buildAndPrintReport(matchReader.matches);
