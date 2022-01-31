import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import dataTeachers from "../../data/teachers";

const CreateForm = ({ form }) => {
  const navigate = useNavigate();

  const submit = (data) => {
    dataTeachers.push(data);
    console.log(data);

    navigate("../");
  };

  return (
    <>
      <h2 className="mb-4">O'qituvchi qo'shish</h2>
      <Form form={form} submit={submit} />
    </>
  );
};

export default CreateForm;
