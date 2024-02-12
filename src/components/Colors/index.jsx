import { ColorCard, ColorsContainer } from "./styles";
// import { PurpleTheme } from "../../themes/purple";
// import { DarkTheme } from "../../themes/dark";
// import { DarkGreen } from "../../themes/darkGreen";
// import { useContext } from "react";

export const Colors = () => {
  return (
    <ColorsContainer>
      <ColorCard color={"dark"}>
        <h3>Dark</h3>
      </ColorCard>
      <ColorCard color={"green"}>
        <h3>Green Dark</h3>
      </ColorCard>
      <ColorCard color={"purple"}>
        <h3>Purple</h3>
      </ColorCard>
    </ColorsContainer>
  );
};
