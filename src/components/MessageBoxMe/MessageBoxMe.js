import { Col, Divider, Row } from 'antd'
import React from 'react'
import picture from '../../face.jpg';
import { ClockCircleOutlined } from '@ant-design/icons';
import './MessageBoxMe.css'

export const MessageBoxMe = () => {
    return (
        <Col>
            <Row justify={'end'}>
                <Col className='message-box-me' style={{wordWrap: 'break-word'}}>
                    <Col>
                        <Row justify={'end'}>
                            <Col>
                                <span className='h2-custom'>Kiss Ferenc</span>
                            </Col>
                        </Row>
                    </Col>
                    <Divider style={{ marginTop: '10px', marginBottom: '10px' }} />
                    <Col>
                        <p>messga messga messgamessga messga messga messga messga messga messga messgamessgamessgamessgamessga messgamessgamessgav messga messgav messga messga
                            messga messga messgamessga messga messga messga messga messga messga messgamessgamessgamessgamessga messgamessgamessgav messga messgav messga messga
                            messga messga messgamessga messga messga messga messga messga messga messgamessgamessgamessgamessga messgamessgamessgav messga messgav messga messga
                            messga messga messgamessga messga messga messga messga messga messga messgamessgamessgamessgamessga messgamessgamessgav messga messgav messga messga
                            messga messga messgamessga messga messga messga messga messga messga messgamessgamessgamessgamessga messgamessgamessgav messga messgav messga messga </p>
                    </Col>
                </Col>
                <Col>
                    <img src={picture} alt='blabla' style={{ width: '3rem', borderRadius: '50%', marginLeft: '10px', marginRight: '10px' }} />
                </Col>
            </Row>
            <Row justify={'end'} style={{ color: 'white', paddingRight: '65px', paddingTop: '10px', paddingBottom: '20px' }}>
                <Col>
                    <ClockCircleOutlined style={{ fontSize: '14px' }} />
                </Col>
                <Col>
                    <span style={{ fontSize: '12px', marginLeft: '10px' }}>1 min ago</span>
                </Col>

            </Row>

        </Col>
    )
}
