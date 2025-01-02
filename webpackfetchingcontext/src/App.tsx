import { Layout, Row, Col } from "antd";
import Button from "./components/Button/Button";
import FormInput from "./components/FormInput/FormInput";
import ListItems from "./components/ListItems/ListItems";

function App() {
  return (
    <Layout>
      <Row justify={"center"} align={"middle"} className="h100">
        <Col span={40}>
          <FormInput />
          <Button />
          <ListItems />
        </Col>
      </Row>
    </Layout>
  );
}

export default App;
