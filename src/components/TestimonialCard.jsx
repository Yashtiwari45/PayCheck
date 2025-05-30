import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialCard = ({ quote, name, title, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
    className="bg-white bg-opacity-10 p-6 rounded-lg flex flex-col items-center text-center"
  >
    <Quote className="h-8 w-8 mb-4 text-yellow-400" />
    <p className="mb-4 italic">"{quote}"</p>
    <img src={image} alt={name} className="w-16 h-16 rounded-full mb-2 mx-auto object-cover" />
    <h4 className="font-semibold">{name}</h4>
    <p className="text-sm text-gray-300">{title}</p>
  </motion.div>
);

export default TestimonialCard;
