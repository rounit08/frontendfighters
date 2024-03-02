import { useState } from "react";

export const ImageUpload = () => {
  const [imageLink, setImageLink] = useState([]);

  const handleImageUpload = (event) => {
    const uploadedImage = event.target.files;
    const selectedImages = Array.from(uploadedImage);

    const imageUrls = selectedImages.map((image) => URL.createObjectURL(image));

    setImageLink((prevImage) => [...prevImage, ...imageUrls]);
  };
  return (
    <>
      <div className="uploadedContainer">
        <p>Upload Image</p>
        <button>
          <input type="file" onChange={handleImageUpload} />
        </button>
        {imageLink.map((imageUrl) => (
          <img
            src={imageUrl}
            alt="imageUploaded"
            style={{ height: 200, width: 100, objectFit: "contain" }}
          />
        ))}
      </div>
    </>
  );
};
