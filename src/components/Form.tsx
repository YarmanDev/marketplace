import React from "react";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { CustomInput } from "./CustomInput";

interface IFormInputs {
  TextField: string;
  firstName: string;
  MyCheckbox: boolean;
}

export const Form = () => {
  const { handleSubmit, control, reset } = useForm<IFormInputs>({
    defaultValues: {
      firstName: "heh",
    },
  });
  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <Controller
        name="MyCheckbox"
        control={control}
        defaultValue={false}
        rules={{ required: true }}
        render={({ field }) => <Checkbox {...field} />}
      /> */}
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => <CustomInput {...field} label="lol" />}
      />
      {/* <input type="submit" /> */}
    </form>
  );
};
