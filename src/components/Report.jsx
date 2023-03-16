export default function Report({ month, year, value, previousValue }) {
  const months = [
    'jan',
    'fev',
    'mar',
    'abr',
    'mai',
    'jun',
    'jul',
    'ago',
    'set',
    'out',
    'nov',
    'dec',
  ];

  const rendimento = (value * 100) / previousValue - 100;
  const colorStyle =
    value > previousValue
      ? 'text-green-500'
      : value < previousValue
      ? 'text-red-500'
      : 'text-gray-500';

  return (
    <div className="flex flex-row px-2 justify-between">
      <div>
        <span className="font-mono">{`${months[month - 1]}/${year}`}</span>
        <span
          className={`${colorStyle} ml-8 font-semibold`}
        >{`R$ ${value.toFixed(2)}`}</span>
      </div>
      <span className={`${colorStyle} font-semibold`}>
        {value > previousValue
          ? `+${rendimento.toFixed(2)}%`
          : value < previousValue
          ? `${rendimento.toFixed(2)}%`
          : '0.00%'}
      </span>
    </div>
  );
}
