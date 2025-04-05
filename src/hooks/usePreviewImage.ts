import { useState } from 'react';

const MAX_FILE_SIZE_BYTES = 2 * 1024 * 1024;

const usePreviewImage = (onErrorCallback) => {
  const [selectedFile, setSelectedFile] = useState<string | ArrayBuffer | null>(
    null
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!!file && file.type.startsWith('image/')) {
      if (file.size > MAX_FILE_SIZE_BYTES) {
        onErrorCallback('File size must be 2MB or smaller');
        setSelectedFile(null);
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      onErrorCallback('Nah because why did you mess it up like that?');
    }
  };

  return { selectedFile, setSelectedFile, handleImageChange };
};

export default usePreviewImage;
