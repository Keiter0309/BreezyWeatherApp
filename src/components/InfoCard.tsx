import React from "react";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  unit: string;
  bgColor: string;
  textColor: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  value,
  unit,
  bgColor,
  textColor,
}) => {
  return (
    <div className={`flex items-center p-3 rounded-lg ${bgColor}`}>
      {icon}
      <div className="ml-3">
        <p className={`text-sm font-medium ${textColor}`}>{title}</p>
        <p className={`text-lg font-bold ${textColor}`}>
          {value}
          {unit}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;

