import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSchool,
  faChalkboardTeacher,
  faUserGraduate,
  faUsers,
  faBookOpen,
  faDoorOpen,
  faCalendarDay,
  faAtom,
} from "@fortawesome/free-solid-svg-icons";

const menuElements = [
  {
    id: "maktab",
    path: "",
    text: "Maktab",
    icon: <FontAwesomeIcon icon={faSchool} />,
  },
  {
    id: "oqituvchilar",
    path: "teachers",
    text: "O'qituvchilar",
    icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
  },
  {
    id: "oquvchilar",
    path: "students",
    text: "O'quvchilar",
    icon: <FontAwesomeIcon icon={faUserGraduate} />,
  },
  {
    id: "sinflar",
    path: "classes",
    text: "Sinflar",
    icon: <FontAwesomeIcon icon={faUsers} />,
  },
  {
    id: "jurnal",
    path: "journal",
    text: "Jurnal",
    icon: <FontAwesomeIcon icon={faBookOpen} />,
  },
  {
    id: "fanlar",
    path: "subjects",
    text: "Fanlar",
    icon: <FontAwesomeIcon icon={faAtom} />,
  },
  {
    id: "xonalar",
    path: "rooms",
    text: "Xonalar",
    icon: <FontAwesomeIcon icon={faDoorOpen} />,
  },
  {
    id: "dars_jadvali",
    path: "schedule",
    text: "Dars jadvali",
    icon: <FontAwesomeIcon icon={faCalendarDay} />,
  },
];

export default menuElements;
