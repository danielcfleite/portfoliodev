import { FaHouse } from "react-icons/fa6";
import { ContainerNav, NavLink } from "./styles";
import { GrProjects } from "react-icons/gr";
import { IoColorFilter, IoDocumentText } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { scrollToComponent } from "../../store/reducers/nav";

export const Navbar = () => {
  const dispatch = useDispatch();
  const handleNavigation = (componentId) => {
    dispatch(scrollToComponent(componentId));
  };
  return (
    <ContainerNav>
      <NavLink onClick={() => handleNavigation("about")}>
        <span>
          <FaHouse />
        </span>
        Sobre{" "}
      </NavLink>
      <NavLink onClick={() => handleNavigation("projects")}>
        <span>
          <GrProjects />
        </span>
        Projetos
      </NavLink>
      <NavLink onClick={() => handleNavigation("resume")}>
        <span>
          <IoDocumentText />
        </span>
        Currículo
      </NavLink>
      <NavLink onClick={() => handleNavigation("colors")}>
        <span>
          <IoColorFilter />
        </span>
        Cores
      </NavLink>
    </ContainerNav>
  );
};
