import React, { useRef } from 'react'

interface FileInputProps {
    onFileSelect: (file: File | null) => void;
    children: JSX.Element;
}
const FileInput:React.FC<FileInputProps> = ({ onFileSelect, children }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if(fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null;
        onFileSelect(file);
    }
  return (
    <div onClick={handleClick} className="cursor-pointer">
        <input ref={fileInputRef} type="file" className="hidden" onChange={handleFileChange} />
        {children}
    </div>
  )
}

export default FileInput