import { SocialMediaLink, SocialMediaNavContainer } from "./styles";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const SocialMediaNav = () => {
  return (
    <>
      <SocialMediaNavContainer>
        <SocialMediaLink
          href="https://www.linkedin.com/in/daniel-carvalho-de-freitas"
          target="_blank"
        >
          <FaLinkedin size={30} />
        </SocialMediaLink>
        <SocialMediaLink
          href="https://github.com/danielcfleite"
          target="_blank"
        >
          <FaGithub size={30} />
        </SocialMediaLink>
        <SocialMediaLink
          href="mailto:danielcfreitasleite@gmail.com"
          target="_blank"
        >
          <MdEmail size={30} />
        </SocialMediaLink>
      </SocialMediaNavContainer>
    </>
  );
};
