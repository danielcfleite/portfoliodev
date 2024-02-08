import { SocialMediaLink, SocialMediaNavContainer } from "./styles";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const SocialMediaNav = () => {
  return (
    <>
      <SocialMediaNavContainer>
        <SocialMediaLink>
          <FaLinkedin size={30} />
        </SocialMediaLink>
        <SocialMediaLink>
          <FaGithub size={30} />
        </SocialMediaLink>
        <SocialMediaLink>
          <MdEmail size={30} />
        </SocialMediaLink>
      </SocialMediaNavContainer>
    </>
  );
};
