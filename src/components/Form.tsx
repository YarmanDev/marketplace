import { Button } from "@mui/material";
import React from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import CustomInput from "./CustomInput";

type IProps = typeof FormFields["register"] | typeof FormFields["login"];
type IFields = Record<IProps[number], string>;

export const Form = (props: { fields: IProps }) => {
  const { fields } = props;
  const { register, handleSubmit } = useForm<IFields>();
  const onSubmit: SubmitHandler<IFields> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => (
        <CustomInput
          key={field}
          {...register(`${field}`)}
          label={fieldsLabels[field]}
        />
      ))}
      <Button
        variant="contained"
        fullWidth
        sx={{ marginTop: "35px" }}
        type="submit"
      >
        Login
      </Button>
    </form>
  );
};

const fieldsLabels = {
  email: "Enter Email",
  password: "Password",
  phone: "Contact number",
  username: "Create Username",
  confirmPassword: "Confirm Password",
};

export const FormFields = {
  login: ["email", "password"],
  register: ["email", "username", "phone", "password", "confirmPassword"],
} as const;
