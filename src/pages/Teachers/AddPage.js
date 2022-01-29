import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const form = [
  {
    label: "Ism va familiya",
    key: "name",
    options: { required: "Ism va familiyani kiriting" },
    className: "col-12",
  },
  {
    label: "Telefon nomeri",
    key: "phone",
    options: {
      required: "Telefon nomerini kiriting",
      minLength: { value: 7, message: "To'g'ri kiriting" },
    },
  },
  {
    label: "Email",
    type: "email",
    defaultValue: "@gmail.com",
    key: "email",
    readOnly: true,
    options: {
      required: "Emailni kiriting",
    },
  },
];

const submit = (data) => {
  console.log(data);
};

const CreateForm = ({}) => {
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

  return (
    <form onSubmit={handleSubmit(customSubmit)}>
      <div className="row mb-4">
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
                  defaultValue={field.defaultValue || ""}
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
        <FontAwesomeIcon icon={faPlus} className="me-2" /> Qo'shish
      </Button>
    </form>
  );
};

export default CreateForm;
