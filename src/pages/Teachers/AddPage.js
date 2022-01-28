import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

const AddPage = () => {
  //   const [isSubmit, setIsSubmit] = useState(false);
  //   const [errors, setErrors] = useState({});
  const [name, setName] = useState("");

  //   const changeField = (value, stateName, setFunc) => {
  //     setFunc(value);
  //     console.log(checkRequired(value));
  //     setErrors({ ...errors, [stateName]: checkRequired(value) });
  //   };

  const submit = (e) => {
    e.preventDefault();
    // setIsSubmit(true);
    console.log(name.toUpperCase());
  };

  //   const checkRequired = (text, min = 1) => {
  //     text = text.trim();
  //     const res = isSubmit && text.length < min;
  //     return res;
  //   };

  //   console.log(errors);

  return (
    <form onSubmit={submit}>
      <div className="row mb-4">
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div>
            <TextField
              label="Ism va familiya"
              variant="outlined"
              className="w-100"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div>
            <TextField
              //   error={errors.name}
              label="Ism va familiya"
              variant="outlined"
              className="w-100"
              value={name}
              //   onChange={(e) => changeField(e.target.value, "name", setName)}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div>
            <TextField
              label="Ism va familiya"
              variant="outlined"
              className="w-100"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div>
            <TextField
              label="Ism va familiya"
              variant="outlined"
              className="w-100"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div>
            <TextField
              label="Ism va familiya"
              variant="outlined"
              className="w-100"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Button variant="outlined" type="submit">
        <FontAwesomeIcon icon={faPlus} className="me-2" /> Qo'shish
      </Button>
    </form>
  );
};

export default AddPage;
