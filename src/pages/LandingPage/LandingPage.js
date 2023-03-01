import React, { useEffect, useState } from "react";
import { Col, Layout, Row, Space } from "antd";
import "./LandingPage.css";
import { LeftMemberCard } from "../../components/LeftMemberCard/LeftMemberCard";
import {
  GifOutlined,
  PhoneOutlined,
  SendOutlined,
  SmileOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import { MessageBoxMe } from "../../components/MessageBoxMe/MessageBoxMe";
import { MessageBoxOther } from "../../components/MeessageBoxOther/MessageBoxOther";
import { HeaderMenu } from "../../components/HeaderMenu";
import { Link } from "react-router-dom";
import { over } from "stompjs";
import SockJS from "sockjs-client";

const { Sider, Content } = Layout;

let stompClient = null;

export const LandingPage = () => {
  const [userData, setUserData] = useState({
    userName: "",
    message: "",
  });

  useEffect(() => {
    console.log("useeffect");
    connectWS();
  }, []);

  const connectWS = () => {
    let Sock = new SockJS("http://localhost:8080/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected);
  };

  const onConnected = () => {
    console.log("csatiztaaam");
    stompClient.subscribe("/chatroom/public", onPublicMessageRecived);
    stompClient.subscribe("/user/" + userData.userName + "/private");
  };

  const onPublicMessageRecived = (payload) => {
    let payloadData = JSON.parse(payload.body);
    switch (payload.status) {
      case "JOIN":
        console.log('JOIN')
        break;
      case "MESSAGE":
        console.log('MESSGAGE case')
        break;
      default:
        console.log('deault case')
        break;
    }
  };

  return (
    <Layout className="layout-left-custom">
      <Sider className={"sider-custom"}>
        <Col style={{ textAlign: "center", color: "white" }}>
          <h1>Member</h1>
        </Col>
        <Col span={20} offset={2} className={"chat-history-cards"}>
          <Col className="chat-history-cards-child">
            <LeftMemberCard />
            <LeftMemberCard />
            <LeftMemberCard />
            <LeftMemberCard />
            <LeftMemberCard />
            <LeftMemberCard />
            <LeftMemberCard />
            <LeftMemberCard />
            <LeftMemberCard />
            <LeftMemberCard />
            <LeftMemberCard />
            <LeftMemberCard />
          </Col>
        </Col>
      </Sider>
      <Layout className="layout-left-custom">
        <HeaderMenu />
        <Content>
          <Col className="chatting-area">
            <Space
              size={"large"}
              direction={"vertical"}
              style={{ display: "flex" }}
            >
              <MessageBoxOther />
              <MessageBoxMe />
              <MessageBoxOther />
              <MessageBoxOther />
              <MessageBoxMe />
              <MessageBoxMe />
              <MessageBoxMe />
              <MessageBoxMe />
              <MessageBoxMe />
              <MessageBoxMe />
              <MessageBoxMe />
            </Space>
          </Col>
          <Col className="message-sender-area">
            <Row>
              <Col
                span={1}
                xs={3}
                style={{ fontSize: "25px", color: "white", margin: "10px" }}
              >
                <Link>
                  <SmileOutlined />
                </Link>
              </Col>
              <Col
                span={1}
                xs={3}
                style={{ fontSize: "25px", color: "white", margin: "10px" }}
              >
                <GifOutlined />
              </Col>
              <Col
                span={1}
                xs={3}
                style={{ fontSize: "25px", color: "white", margin: "10px" }}
              >
                <VideoCameraOutlined />
              </Col>
              <Col
                span={1}
                xs={3}
                style={{ fontSize: "25px", color: "white", margin: "10px" }}
              >
                <PhoneOutlined />
              </Col>
            </Row>
            <Row>
              <Col span={19} style={{ width: "90%" }}>
                <TextArea
                  style={{
                    backgroundColor: "#363636",
                    resize: "none",
                    color: "white",
                    paddingLeft: "0",
                  }}
                ></TextArea>
              </Col>
              <Col
                span={1}
                offset={1}
                style={{ fontSize: "25px", color: "white" }}
                className={"center-icon-div"}
              >
                <SendOutlined className="icon" />
              </Col>
            </Row>
          </Col>
        </Content>
      </Layout>
    </Layout>
  );
};
