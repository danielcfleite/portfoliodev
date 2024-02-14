import { useDispatch } from "react-redux";
import { ColorCard, ColorsContainer } from "./styles";
import { setTheme } from "../../store/reducers/theme";

export const Colors = () => {
  const dispatch = useDispatch();
  return (
    <ColorsContainer>
      <ColorCard color={"dark"} onClick={() => dispatch(setTheme("dark"))}>
        <h3>Dark</h3>
      </ColorCard>
      <ColorCard color={"green"} onClick={() => dispatch(setTheme("green"))}>
        <h3>Green Dark</h3>
      </ColorCard>
      <ColorCard color={"purple"} onClick={() => dispatch(setTheme("purple"))}>
        <h3>Purple</h3>
      </ColorCard>
    </ColorsContainer>
  );
};
