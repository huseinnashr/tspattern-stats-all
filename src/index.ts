import { CsvFileReader } from "./dataReaders/CsvFileReader";
import { MatchReader } from "./MatchReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./outputTargets/ConsoleReport";
import { Summary } from "./Summary";

const reader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(reader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);
