import { Resume } from "./styles";
import { FaFileDownload } from "react-icons/fa";

export const ResumeDownload = () => {
  return (
    <Resume
      target="_blank"
      href="https://drive.google.com/file/d/1l0BX3mhIl9UUJpByV7blHJb_CMUcDkqO/view?usp=sharing"
    >
      Download Currículo <FaFileDownload />
    </Resume>
  );
};
