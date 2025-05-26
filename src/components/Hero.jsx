import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const Hero = ({ email, setEmail, handleSubmit }) => (
  <>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-5xl font-bold mb-6"
    >
      Unleash Your Business Potential
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="text-xl mb-8 max-w-2xl mx-auto"
    >
      MonsterScale helps you tame the complexities of growth and scale your business to monstrous heights.
    </motion.p>
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      onSubmit={handleSubmit}
      className="flex justify-center mb-12"
    >
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-64 mr-2 text-black"
        required
      />
      <Button type="submit">
        Get Started <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </motion.form>
  </>
);

export default Hero;
