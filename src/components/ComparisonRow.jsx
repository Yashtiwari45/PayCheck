import { Check } from "lucide-react";

const ComparisonRow = ({ feature, monsterScale, competitorA, competitorB }) => (
  <tr className="border-b border-gray-700">
    <td className="p-4">{feature}</td>
    <td className="p-4 text-center">{monsterScale ? <Check className="h-5 w-5 mx-auto text-green-400" /> : "-"}</td>
    <td className="p-4 text-center">{competitorA ? <Check className="h-5 w-5 mx-auto text-green-400" /> : "-"}</td>
    <td className="p-4 text-center">{competitorB ? <Check className="h-5 w-5 mx-auto text-green-400" /> : "-"}</td>
  </tr>
);

export default ComparisonRow;
