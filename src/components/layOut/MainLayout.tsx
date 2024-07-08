import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { useAppDispatch } from "../../redux/hooks";
import { logOut } from "../../redux/fetures/auth/authSlice";

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <SideBar></SideBar>
        <Layout>
          <Header>
            <Button
              onClick={() => dispatch(logOut())}
              style={{ color: "black" }}
            >
              Log Out{" "}
            </Button>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
