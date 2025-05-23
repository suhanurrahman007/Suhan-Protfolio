"use client";
import React from "react";
import { HoverBorderGradient } from "../AceternityUI/lib/hover-border-gradient";

interface HoverGradientButtonProps {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const ButtonP: React.FC<HoverGradientButtonProps> = ({
  label,
  icon,
  onClick,
  className = "",
}) => {
  return (
    <HoverBorderGradient
      containerClassName="rounded-full"
      as="button"
      onClick={onClick}
      className={`dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-4 py-2 ${className}`}
    >
      {icon && <span className="h-4 w-4">{icon}</span>}
      <span>{label}</span>
    </HoverBorderGradient>
  );
};
