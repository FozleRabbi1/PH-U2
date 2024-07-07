import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import { sideBarItems } from "../../routes/admin.routes";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
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
        <Layout>
          <Header>
            <h2>PH-U-Again</h2>
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
