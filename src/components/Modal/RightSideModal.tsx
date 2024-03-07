"use client";

import React, { useEffect, useRef } from "react";
import CloseIcon from "@/assets/svg/close-circle.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size: "small" | "medium" | "large";
  children: JSX.Element;
  width: string;
}

const ModalComponent: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  size,
  children,
  width,
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

  //   let modalSizeClass = "";
  //   if (size === "small") {
  //     modalSizeClass = "w-full mx-8 sm:mx-0 sm:max-w-sm";
  //   } else if (size === "medium") {
  //     modalSizeClass = "w-full mx-4 sm:mx-0 sm:max-w-[422px] sm:w-[422px]";
  //   } else if (size === "large") {
  //     modalSizeClass = "w-full mx-4 sm:mx-0 sm:w-[70%] sm:ml-[200px]";
  //   }

  return (
    <>
      <div className="relative top-0 left-0 w-full h-[1041px] z-50 flex items- justify-center bg-opacity-0 bg-black flex-col">
        <div
          ref={modalRef}
          className={`fixed top-0 right-0 w-[${width}] mx-4 sm:mx-0 `}
        >
          <div
            className={`bg-white h-fit p-4 sm:px-[37px] sm:pt-[47px] w-full shadow-xl overflow-hidden `}
          >
            <div
              className="mb-4 flex justify-end cursor-pointer"
              onClick={onClose}
            >
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
