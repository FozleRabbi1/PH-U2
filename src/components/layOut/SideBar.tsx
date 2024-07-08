import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sideBarGenerator } from "../../utils/sideBarGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/fetures/auth/authSlice";

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const SideBar = () => {
  const user = useAppSelector(useCurrentUser);

  let sideBarItems;
  switch (user!.role) {
    case userRole.ADMIN:
      sideBarItems = sideBarGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sideBarItems = sideBarGenerator(facultyPaths, userRole.FACULTY);
      break;

    case userRole.STUDENT:
      sideBarItems = sideBarGenerator(studentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }

  return (
    <Sider>
      <div
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "green",
          textAlign: "center",
          height: "50px",
        }}
      >
        <h2>PH-U2</h2>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideBarItems}
      />
    </Sider>
  );
};

export default SideBar;
