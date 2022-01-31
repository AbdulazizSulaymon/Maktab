import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/Form";
import dataTeachers from "../../data/teachers";

const CreateForm = ({ form }) => {
  const navigate = useNavigate();
  const params = useParams();

  const [index, setIndex] = useState(params.id);
  console.log(index);

  const submit = (data) => {
    dataTeachers[index] = data;
    console.log(data);

    navigate("../");
  };

  return (
    <>
      <h2 className="mb-4">O'qituvchi ma'lumotlarini o'zgartirish</h2>
      <Form form={form} submit={submit} value={dataTeachers[index]} />
    </>
  );
};

export default CreateForm;
