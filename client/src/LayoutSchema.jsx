import { Layout } from "antd";
import { MemberComponent } from "./components/Member";
import TopSection from "./components/TopSection/TopSection";
import "./LayoutSchema.css";
import { GDD_MEMBERS } from "./utils/gdd-members";

const { Header, Footer, Content } = Layout;
export const LayoutSchema = () => {
  return (
    <Layout>
      <Layout>
        <Header className={"header-container"}> GDD Hall of Shame </Header>
        <Content className={"content-container"}>
          <TopSection />
          <div>
            {GDD_MEMBERS.map((member) => {
              return (
                <span key={member.accountId}>
                  <MemberComponent
                    key={member.accounId}
                    name={member.name}
                    accountId={member.accountId}
                  />
                </span>
              );
            })}
          </div>
        </Content>
        <Footer>GDD Games</Footer>
      </Layout>
    </Layout>
  );
};
