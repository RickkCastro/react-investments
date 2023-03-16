import Investments from '../components/Investments';
import Reports from '../components/Reports';
import { investments } from '../data/investments-2023-02-btc';

export default function ReactInvestments() {
  return (
    <div>
      <header>
        <div className="bg-blue-200 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">
            react-investments v1.0.0
          </h1>
        </div>
      </header>

      <main className="container mx-auto p-4">
        {investments.map(item => {
          return (
            <Investments name={item.description} key={item.id}>
              <Reports investmentId={item.id} />
            </Investments>
          );
        })}
      </main>
    </div>
  );
}
