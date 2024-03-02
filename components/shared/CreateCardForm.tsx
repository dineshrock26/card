// "use client";

// import React, { useState } from 'react';

// const CreateCardForm: React.FC = () => {
//   const [inputText1, setInputText1] = useState<string>('');
//   const [inputText2, setInputText2] = useState<string>('');

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInputText1(event.target.value);
//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInputText2(event.target.value);
//   };

//   return (
//     <div className="flex justify-between">
//       <div className="flex flex-col justify-center w-1/2 px-4">
//         <input
//           type="text"
//           value={inputText1}
//           onChange={handleInputChange}
//           className="border border-gray-300 rounded-md p-2 w-full"
//           placeholder="Type here..."
//         />
//       </div>
//       <div className="flex flex-col justify-center w-1/2 px-4">
//         <p className="border border-gray-300 rounded-md p-2 w-full h-full overflow-auto">
//           {inputText1 || 'Username'}
//         </p>
//       </div>
//     </div>
//   );
// };
// }
// export default CreateCardForm;

"use client";

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { Button } from '../ui/button';
import * as htmlToImage from 'html-to-image';

const CreateCardForm: React.FC = () => {
  const [inputText1, setInputText1] = useState<string>('');
  const [inputText2, setInputText2] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const downloadRef = useRef<HTMLDivElement>(null);

  const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText1(event.target.value);
  };

  const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText2(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
}

const handleChangeImage = () => {
    // Clear the selected image and image preview
    setSelectedImage(null);
    setImagePreview(null);
  };

  const handleDownload = () => {
    if (downloadRef.current) {
      htmlToImage.toPng(downloadRef.current)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = 'card.png';
          link.href = dataUrl;
          link.click();
        })
        .catch((error) => {
          console.error('Error generating image:', error);
        });
    }
  };

  return (
    <div className="lg:flex lg:flex-row flex flex-col lg:justify-between items-center justify-center">
        
      <div className='flex flex-col space-y-10 w-full items-center'>  
        <div className="flex flex-col justify-center w-1/2 px-4">
        <input
          type="file"
          onChange={handleImageChange}
          className="border border-gray-300 rounded-md p-2 w-full"
        />
      </div>
      <div className="flex flex-col justify-center w-1/2 px-4">
        <input
          type="text"
          value={inputText1}
          onChange={handleInputChange1}
          className="border border-gray-300 rounded-md p-2 w-full"
          placeholder="First Name"
        />
      </div>
      <div className="flex flex-col justify-center w-1/2 px-4">
        <input
          type="text"
          value={inputText2}
          onChange={handleInputChange2}
          className="border border-gray-300 rounded-md p-2 w-full"
          placeholder="Last Name"
        />
      </div>
      </div>
      
      
      
      
      
      
      
    <div className="downloadcard flex flex-col items-center justify-between w-full px-4 space-y-10 mt-14" ref={downloadRef}>  
      <div className=" rounded-full bg-white h-[100px] w-[100px] ">
        {imagePreview && (
          <>
            {/* <img src={imagePreview} alt="Selected" className="w-full h-auto" /> */}
            <Image width={100} height={100} src={imagePreview} alt="Selected" className=" rounded-full" />
            {/* <Button onClick={handleChangeImage } className="mt-2 px-4 py-2 bg-gray-500 text-white rounded-md">
              Change Image
            </Button> */}
          </>
          
        )}
        {/* <Button onClick={ handleChangeImage } className="mt-2 px-4 py-2 bg-gray-500 text-white rounded-md">
              Change Image
            </Button> */}
      </div>

        <div className="flex flex-col justify-center w-1/2 px-4">
            <p className="border border-gray-300 rounded-md p-2 w-full h-full overflow-auto">
                {inputText1 || 'Firstname'}
            </p>
        </div>

      <div className="flex flex-col justify-center w-1/2 px-4">
            <p className="border border-gray-300 rounded-md p-2 w-full h-full overflow-auto">
                {inputText2 || 'Lastname'}
            </p>
        </div>
        <Button onClick={handleDownload} className="mt-2 px-4 py-2 bg-gray-500 text-white rounded-md">
          Download Card
        </Button>
        </div>
    </div>
  );
};

export default CreateCardForm;
