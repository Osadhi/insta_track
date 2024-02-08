import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FileUploadForm: React.FC<{
  onUpload: (files: FileList | null) => void;
  label: string;
  required?: boolean;
}> = ({ onUpload, label, required }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    onUpload(files);
  };

  return (
    <div className="flex flex-row w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={label} className="flex-col">
        {label}
      </Label>
      <Input
        id={label}
        type="file"
        onChange={handleFileChange}
        className="flex-1"
        required={required}
      />
    </div>
  );
};

export default FileUploadForm;
