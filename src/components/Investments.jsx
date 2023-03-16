export default function Investments({
  name = 'Nome do investimento',
  children,
}) {
  return (
    <div className="flex flex-col border p-2">
      <h1 className="text-xl font-semibold text-center w-full p-1">{name}</h1>
      {children}
    </div>
  );
}
