"use client";

import React, { useEffect, useRef } from "react";
import CloseIcon from "@/assets/svg/close-circle.svg";
import { Button } from "../Forms/Button";
import ArrowCircleLeft from "@/assets/icons/ArrowCircleLeft";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: JSX.Element;
  width: string;
  height: string;
}

const ModalComponent: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  width,
  height,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="relative top-0 left-0 w-full z-50 flex items- justify-center bg-opacity-0 bg-black flex-col overflow-hidden">
        <div ref={modalRef} className={`fixed top-0 right-0  mx-4 sm:mx-0`}>
          <div
            className={`bg-white p- sm:px-[24px] sm:pt-[24px] w-[${width}] h-[${height}] shadow-xl overflow-scroll`}
          >
            <div
              className="mb-4 flex justify-between items-center cursor-pointer"
              onClick={onClose}
            >
              <div className="flex items-center gap-x-2 text-[#3D663D]">
                <ArrowCircleLeft />
                Go back
              </div>
              <div className="w-6 h-6 rounded-full bg-white flex justify-center items-center">
                <CloseIcon />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-xl text-[#1a1a1a] mb-5 font-bold">{title}</p>
            </div>

            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalComponent;
// sm:max-w-[800px] sm:w-[800px]
// sm:w-[${width}] sm:max-w-[${width}]
