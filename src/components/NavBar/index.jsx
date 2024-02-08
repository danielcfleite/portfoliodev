import { FaHouse } from "react-icons/fa6";
import { ContainerNav, NavLink } from "./styles";
import { GrProjects } from "react-icons/gr";
import { IoColorFilter, IoDocumentText } from "react-icons/io5";

export const Navbar = () => {
  return (
    <ContainerNav>
      <NavLink>
        <span>
          <FaHouse />
        </span>
        Sobre{" "}
      </NavLink>
      <NavLink>
        <span>
          <GrProjects />
        </span>
        Projetos
      </NavLink>
      <NavLink>
        <span>
          <IoDocumentText />
        </span>
        Currículo
      </NavLink>
      <NavLink>
        <span>
          <IoColorFilter />
        </span>
        Cores
      </NavLink>
    </ContainerNav>
  );
};
