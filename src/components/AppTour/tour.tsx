'use client'
import React, { useState, useEffect } from "react";
import TourGuild from "./guild";

interface TourProps {
  step: number;
  onClose: () => void;
  nextStep: () => void;
  targetElementId: any;
  stepContents: React.ReactNode[];
}

const Tour: React.FC<TourProps> = ({
  step,
  targetElementId,
  stepContents,
}) => {
  const [targetPosition, setTargetPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });

  useEffect(() => {
    const updateTargetPosition = () => {
      const targetElement = document.getElementById(targetElementId);
      if (targetElement) {
        const { top, left } = targetElement.getBoundingClientRect();
        setTargetPosition({ top, left });
      }
    };

    updateTargetPosition();

    window.addEventListener("resize", updateTargetPosition);

    return () => {
      window.removeEventListener("resize", updateTargetPosition); 
    };
  }, [targetElementId]);

  useEffect(() => {
    // Scroll to the target position
    const container = document.getElementById("tourContainer");
    if (container) {
      container.scrollTop = targetPosition.top - 100; // Adjust the offset as needed
    }
  }, [step, targetPosition]);

  return (
    <div
      id="tourContainer"
      className="fixed inset-0 overflow-auto bg-black bg-opacity-50 z-50"
    >
      <div
        className="bg-transparent p-4 rounded absolute"
        style={{ top: targetPosition.top, left: targetPosition.left }}
      >
        {stepContents[step]}
      </div>
    </div>
  );
};

export default Tour;
