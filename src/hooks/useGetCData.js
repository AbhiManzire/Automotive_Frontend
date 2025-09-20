import { AdminContext } from "@/context/AdminContext";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

const useGetCData = () => {
  const { state } = useContext(AdminContext);
  const { adminInfo } = state;
  const location = useLocation();

  const path = location?.pathname?.split("?")[0].split("/")[1];

  const [role, setRole] = useState();
  const [accessList, setAccessList] = useState([]);

  // Function to decrypt data
  const decryptData = async (encryptedData, iv) => {
    const secretKey = import.meta.env.VITE_APP_ENCRYPT_PASSWORD; // Your secret password

    const keyBuffer = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(secretKey)
    );

    const encryptedArray = new Uint8Array(
      encryptedData.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
    );

    const ivBuffer = new Uint8Array(
      iv.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))
    );

    try {
      const decrypted = await crypto.subtle.decrypt(
        {
          name: "AES-CBC",
          iv: ivBuffer,
        },
        await crypto.subtle.importKey(
          "raw",
          keyBuffer,
          { name: "AES-CBC" },
          false,
          ["decrypt"]
        ),
        encryptedArray
      );

      const decodedData = new TextDecoder().decode(decrypted);
      return decodedData;
    } catch (error) {
      console.error("Decryption failed:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchDecryptedData = async () => {
      if (adminInfo?.data && adminInfo?.iv) {
        try {
          const decryptedString = await decryptData(adminInfo.data, adminInfo.iv);
          const decryptedArray = JSON.parse(decryptedString);
          const lastElement = decryptedArray.pop(); // Role
          setRole(lastElement);

          // Ensure banners, used-spares, and lucky-draw are included in dev mode
          if (import.meta.env.MODE === "development") {
            if (!decryptedArray.includes("banners")) {
              decryptedArray.push("banners");
            }
            if (!decryptedArray.includes("used-spares")) {
              decryptedArray.push("used-spares");
            }
            if (!decryptedArray.includes("lucky-draw")) {
              decryptedArray.push("lucky-draw");
            }
            if (!decryptedArray.includes("vendor")) {
              decryptedArray.push("vendor");
            }
          }

          setAccessList(decryptedArray);
        } catch (error) {
          console.error("Failed to decrypt and parse data:", error);
        }
      }
    };
    fetchDecryptedData();
  }, [adminInfo]);

  return {
    role,
    path,
    accessList,
  };
};

export default useGetCData;
