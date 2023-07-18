import { Container } from "./style";
import React from "react";

const Button = ({ botaoTam, border = true, children, ...rest }) => {
  return (
    <Container botaoTam={botaoTam} border={border} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
