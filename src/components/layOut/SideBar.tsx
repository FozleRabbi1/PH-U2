import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sideBarGenerator } from "../../utils/sideBarGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";

const SideBar = () => {
  const UserRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student",
  };
  const user = "admin";

  let sideBarItems;
  switch (user) {
    case UserRole.ADMIN:
      sideBarItems = sideBarGenerator(adminPaths, UserRole.ADMIN);
      break;
    case UserRole.FACULTY:
      sideBarItems = sideBarGenerator(facultyPaths, UserRole.FACULTY);
      break;

    case UserRole.STUDENT:
      sideBarItems = sideBarGenerator(studentPaths, UserRole.STUDENT);
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
