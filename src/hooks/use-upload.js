import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { v4 } from "uuid";
import { storage } from "../firebase/firebaseConfig";

const useUpload = () => {
  const [loading, setLoading] = useState(false);
  const [currentError, setError] = useState(null);

  const startUpload = (uploadDetails, applyData) => {
    setLoading(true);
    const storageRef = ref(
      storage,
      `${uploadDetails.folderName}/${uploadDetails.fileData.name + v4()}`
    );
    uploadBytes(storageRef, uploadDetails.fileData)
      .then((res) => {
        // getDownloadURL(res)
        //   .then((url) => {
        //     console.log(url);
        //     console.log("Uploaded successfully");
        //     setLoading(false);
        //   })
        //   .catch((error2) => {
        //     setError(error2);
        //   })
        getDownloadURL(storageRef)
          .then((url) => {
            applyData(url);
          })
          .catch((error2) => setError(error2));
        setLoading(false);
      })
      .catch((error1) => {
        setError(error1);
      });
  };

  return {
    loading,
    currentError,
    startUpload,
  };
};

export default useUpload;
