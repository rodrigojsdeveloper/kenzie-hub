import { Container, SelectContainer } from "./style";
import React from "react";

const Select = ({
  children,
  border = true,
  label,
  register,
  name,
  error = "",
  ...rest
}) => {
  return (
    <Container>
      <div>
        {label} {!!error && <span> - {error}</span>}
      </div>

      <SelectContainer border={border} isErrored={!!error}>
        <select {...register(name)} {...rest}>
          {children}
        </select>
      </SelectContainer>
    </Container>
  );
};

export default Select;
