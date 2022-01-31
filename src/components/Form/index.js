import FormWrapper from "./FormWrapper";
import { faPlus, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const Form = ({ form, submit, value }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const customSubmit = (data) => {
    submit(data);
    reset();
  };

  const watchingFirtname = watch("firstName");

  useEffect(() => {
    // console.log(watch("firstName"));
    console.log("ism o'zgardi");
  }, [watchingFirtname]);

  return (
    <FormWrapper onSubmit={handleSubmit(customSubmit)}>
      <div className="row mb-3">
        {form.map((field) => {
          return (
            <div
              className={
                (field.className || "col-sm-6 col-md-4 col-lg-3") + " mb-4"
              }
              key={field.key}
            >
              <div>
                <TextField
                  type={field.type || "text"}
                  defaultValue={
                    field.defaultValue || value ? value[field.key] : ""
                  }
                  InputProps={{ readOnly: field.readOnly }}
                  label={
                    errors[field.key] ? errors[field.key].message : field.label
                  }
                  variant="outlined"
                  className="w-100"
                  error={errors[field.key]}
                  {...register(field.key, field.options)}
                />
              </div>
            </div>
          );
        })}
        <div></div>
      </div>
      <Button variant="outlined" type="submit">
        {value ? (
          <>
            <FontAwesomeIcon icon={faSave} className="me-2" /> Saqlash
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faPlus} className="me-2" /> Qo'shish
          </>
        )}
      </Button>
    </FormWrapper>
  );
};

export default Form;
