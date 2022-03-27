import {
  Row,
  Col,
  Form,
  Input,
  Select,
  Tooltip,
  Button,
  Space,
  Typography,
  DatePicker,
  Radio,
} from "antd";
import React from "react";
import ReactDOM from "react-dom";
import "./CreateUserPage.css";

export function CreateUserPage() {
  const { Option } = Select;
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const [value, setValue] = React.useState(1);

  const onChangeRadio = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <Row>
      <Col span={12} offset={6}>
        <div className="content">
          <Row style={{ marginBottom: "10px" }} className="fontHeaderContent">
            Creater New User
          </Row>
          <Row
            style={{ marginTop: "10px", marginLeft: "5px", display: "block" }}
          >
            {/* Form */}
            <Form name="complex-form" onFinish={onFinish}>
              <Form.Item label="FirstName" style={{ marginBottom: 0 }}>
                <Form.Item
                  name="Fistname"
                  rules={[{ required: true }]}
                  style={{ display: "block" }}
                >
                  <Input />
                </Form.Item>
              </Form.Item>
              <Form.Item label="LastName" style={{ marginBottom: 0 }}>
                <Form.Item
                  name="Lastname"
                  rules={[{ required: true }]}
                  style={{ display: "block" }}
                >
                  <Input />
                </Form.Item>
              </Form.Item>
              <Form.Item label="Date of Birth" style={{ marginBottom: 0 }}>
                <Form.Item
                  name="DateOfBirth"
                  rules={[{ required: true }]}
                  style={{ display: "block" }}
                >
                  <DatePicker
                    style={{ display: "block" }}
                    format="DD-MM-YYYY"
                    placeholder=""
                  />
                </Form.Item>
              </Form.Item>
              <Form.Item label="Gender">
                <Radio.Group onChange={onChangeRadio} value={value}>
                  <Radio value={1}>Female</Radio>
                  <Radio value={2}>Male</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Joined Date" style={{ marginBottom: 0 }}>
                <Form.Item
                  name="JoinedDate"
                  rules={[{ required: true }]}
                  style={{ display: "block" }}
                >
                  <DatePicker
                    style={{ display: "block" }}
                    format="DD-MM-YYYY"
                    placeholder=""
                  />
                </Form.Item>
              </Form.Item>
              <Form.Item label="Type">
                <Form.Item
                  name="Type"
                  rules={[{ required: true }]}
                  style={{ display: "block" }}
                >
                  <Select
                    showSearch
                    style={{ display: "block" }}
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                    filterSort={(optionA, optionB) =>
                      optionA.children
                        .toLowerCase()
                        .localeCompare(optionB.children.toLowerCase())
                    }
                  >
                    <Option value="1">Saff</Option>
                    <Option value="2">Admin</Option>
                  </Select>
                </Form.Item>
              </Form.Item>

              <Form.Item label=" " colon={false}>
                <Col justify="center">
                  <Button type="primary" htmlType="submit" danger>
                    Save
                  </Button>
                </Col>

                <Button justify="end">Cancel</Button>
              </Form.Item>
            </Form>
          </Row>
        </div>
      </Col>
    </Row>
  );
}
