import { Resume } from "./styles";
import { FaFileDownload } from "react-icons/fa";

export const ResumeDownload = () => {
  return (
    <Resume
      target="_blank"
      href="https://drive.google.com/file/d/12BCB1SC9mCQxUquAc_VJ5AeEXHW_JVJk/view?usp=sharing"
    >
      Download Currículo <FaFileDownload />
    </Resume>
  );
};
