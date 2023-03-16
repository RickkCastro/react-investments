import { reports } from '../data/investments-2023-02-btc';
import Report from './Report';

export default function Reports({ investmentId }) {
  const filteredReports = reports
    .filter(report => {
      return report.investmentId === investmentId;
    })
    .sort((a, b) => {
      return a.month > b.month ? 1 : a.month < b.month ? -1 : 0;
    });

  const valorFinal = filteredReports[filteredReports.length - 1].value;
  const valorInicial = filteredReports[0].value;

  const redimentoTotal = valorFinal - valorInicial;

  const rendimento = (valorFinal * 100) / valorInicial - 100;
  const colorStyle =
    valorFinal > valorInicial
      ? 'text-green-500'
      : valorFinal < valorInicial
      ? 'text-red-500'
      : 'text-gray-500';

  const sinal = valorFinal > valorInicial ? '+' : '';

  return (
    <div>
      <h2 className="text-lg font-medium w-full text-center p-2">
        Redimento total:{' '}
        <span className={`${colorStyle}`}>{`R$ ${redimentoTotal.toFixed(
          2
        )} (${sinal}${rendimento.toFixed(2)}%)`}</span>
      </h2>
      {filteredReports.map((report, index) => {
        let previusIndex = index > 0 ? index - 1 : index;
        return (
          <Report
            month={report.month}
            year={report.year}
            value={report.value}
            key={report.id}
            previousValue={filteredReports[previusIndex].value}
          ></Report>
        );
      })}
    </div>
  );
}
