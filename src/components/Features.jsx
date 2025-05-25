import { BarChart, Zap, Shield } from "lucide-react";
import FeatureCard from "./FeatureCard";

const Features = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
    <FeatureCard
      icon={<BarChart className="h-12 w-12 mb-4" />}
      title="Powerful Analytics"
      description="Gain deep insights into your business performance with our advanced analytics tools."
    />
    <FeatureCard
      icon={<Zap className="h-12 w-12 mb-4" />}
      title="Lightning Fast"
      description="Experience blazing-fast performance that keeps up with your growing business needs."
    />
    <FeatureCard
      icon={<Shield className="h-12 w-12 mb-4" />}
      title="Robust Security"
      description="Rest easy knowing your data is protected by industry-leading security measures."
    />
  </div>
);

export default Features;
