import React from "react";
import { motion } from "framer-motion";

interface InfoCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: JSX.Element;
  bgColor: string;
  textColor: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  value,
  unit,
  icon,
  bgColor,
  textColor,
}) => (
  <motion.div
    className={`flex items-center space-x-3 ${bgColor} p-4 rounded-lg shadow-md`}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    {icon}
    <div>
      <p className="text-sm text-gray-600 font-medium">{title}</p>
      <p className={`text-xl font-bold ${textColor}`}>
        {value} {unit}
      </p>
    </div>
  </motion.div>
);

export default InfoCard;
