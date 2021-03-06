import { MatchReader } from './MatchReader';
import { Summary } from './Summary';


const matchReader = MatchReader.fromCsv('original.csv');
const summary = Summary.winAnalysisWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);