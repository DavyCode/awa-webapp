"use client";

import React, { useEffect, useRef } from "react";
import CloseIcon from "@/assets/svg/close-circle.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size: "small" | "medium" | "large";
  children: JSX.Element;
}

const FormModalComponent: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  size,
  children,
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
      <div className="fixed top-2 w-full h-full z-50 flex right-0 items-start bg-opacity-75 bg-black flex-col">
        <div
          ref={modalRef}
          className="w-full sm:w-[879px] float-right flex justify-end"
        >
          <div
            className={`bg-white p-4 w-full shadow-xl overflow-hidden `}
          >
            <div
              className="mb-1 flex justify-end cursor-pointer"
              onClick={onClose}
            >
              <div className="w-6 h-6 rounded-full bg-white flex justify-end items-center">
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

export default FormModalComponent;
