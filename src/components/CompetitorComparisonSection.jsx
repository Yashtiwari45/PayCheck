import ComparisonRow from "./ComparisonRow";

const CompetitorComparisonSection = () => (
  <section className="mt-24">
    <h2 className="text-4xl font-bold mb-12">How We Compare</h2>
    <div className="overflow-x-auto">
      <table className="w-full bg-white bg-opacity-10 rounded-lg">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="p-4 text-left">Features</th>
            <th className="p-4 text-center">MonsterScale</th>
            <th className="p-4 text-center">Competitor A</th>
            <th className="p-4 text-center">Competitor B</th>
          </tr>
        </thead>
        <tbody>
          <ComparisonRow feature="Advanced Analytics" monsterScale={true} competitorA={true} competitorB={false} />
          <ComparisonRow feature="Unlimited Projects" monsterScale={true} competitorA={false} competitorB={true} />
          <ComparisonRow feature="24/7 Support" monsterScale={true} competitorA={false} competitorB={false} />
          <ComparisonRow feature="Custom Integrations" monsterScale={true} competitorA={true} competitorB={true} />
          <ComparisonRow feature="AI-Powered Insights" monsterScale={true} competitorA={false} competitorB={false} />
        </tbody>
      </table>
    </div>
  </section>
);

export default CompetitorComparisonSection;
