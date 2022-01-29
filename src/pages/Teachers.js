import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import { Route, Routes, Link } from "react-router-dom";
import DataTable from "../components/Table";
import dataTeachers from "../data/teachers";
import CreateForm from "./Teachers/AddPage";

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

const TeachersPage = () => {
  return (
    <>
      <div className="mb-3">
        <Link to="add">
          <Button variant="outlined">
            <FontAwesomeIcon icon={faPlus} className="me-2" /> Qo'shish
          </Button>
        </Link>
      </div>
      <DataTable rows={dataTeachers} columns={columns} />
    </>
  );
};

export default function Teachers() {
  return (
    <>
      <h2 className="mb-4">O'qituvchilar</h2>

      <Routes>
        <Route path="/add" element={<CreateForm />} />
        <Route path="/" element={<TeachersPage></TeachersPage>} />
      </Routes>
    </>
  );
}
