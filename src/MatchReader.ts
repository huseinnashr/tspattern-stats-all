import { MatchResult } from "./MatchResults";
import { DataReader } from "./dataReaders/DataReader";
import { dateStringToDate } from "./utils";
import { MatchData } from "./MatchData";

import { CsvFileReader } from "./dataReaders/CsvFileReader";

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6],
        ];
      }
    );
  }
}
