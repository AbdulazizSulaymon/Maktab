import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import DataTable from "../components/Table";
import dataTeachers from "../data/teachers";
import AddPage from "./Teachers/AddPage";
import EditPage from "./Teachers/EditPage";

const columns = [
  {
    title: "Ismi va familiyasi",
    getValue: (row) => `${row.firstName} ${row.lastName}`,
  },
  // {
  //   key: "firstName",
  //   title: "Ismi",
  // },
  // { key: "lastName", title: "Familiya" },
  { key: "subject", title: "Fani" },
  { key: "phone", title: "Telefon raqami" },
  { key: "birthDate", title: "Tu'gilgan sanasi" },
  { key: "salary", title: "Maoshi" },
];

const form = [
  {
    label: "Ism",
    key: "firstName",
    options: { required: "Ism kiriting" },
    // className: "col-12",
  },
  {
    label: "Familiya",
    key: "lastName",
    options: { required: "Familiyani kiriting" },
  },
  {
    label: "Fan",
    key: "subject",
    options: { required: "Fanni kiriting" },
  },
  {
    label: "Telefon nomeri",
    key: "phone",
    options: {
      required: "Telefon nomerini kiriting",
      minLength: { value: 9, message: "To'g'ri kiriting" },
    },
  },
  {
    label: "Tug'ilgan sanasi",
    key: "birthDate",
    // readOnly: true,
  },
];

const TeachersPage = () => {
  const navigate = useNavigate();

  const actions = {
    edit: (index) => {
      navigate(`edit/${index}`);
    },
    delete: (index) => {
      dataTeachers.splice(index, 1);
    },
  };

  return (
    <>
      <div className="mb-3">
        <Link to="add">
          <Button variant="outlined">
            <FontAwesomeIcon icon={faPlus} className="me-2" /> Qo'shish
          </Button>
        </Link>
      </div>
      <DataTable rows={dataTeachers} columns={columns} actions={actions} />
    </>
  );
};

export default function Teachers() {
  return (
    <>
      <Routes>
        <Route path="/add" element={<AddPage form={form} />} />
        <Route path="/edit/:id" element={<EditPage form={form} />} />
        <Route
          path="/"
          element={
            <>
              <h2 className="mb-4">O'qituvchilar</h2>
              <TeachersPage></TeachersPage>
            </>
          }
        />
      </Routes>
    </>
  );
}
