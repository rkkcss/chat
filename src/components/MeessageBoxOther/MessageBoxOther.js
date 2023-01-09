import { ClockCircleOutlined } from '@ant-design/icons';
import { Col, Divider, Row } from 'antd'
import React from 'react'
import picture from '../../face.jpg';
import './MessageBoxOther.css'

export const MessageBoxOther = () => {
    return (
        <Col >
            <Row justify={'start'}>
                <Col>
                    <img src={picture} alt='blabla' style={{ width: '3rem', borderRadius: '50%', marginRight: '10px' }} />
                </Col>
                <Col className='message-box-other'>
                    <Row justify={'space-between'}>

                        <Col>
                            <span className='h2-custom'>Nagy Józsi</span>
                        </Col>
                    </Row>
                    <Divider style={{ marginTop: '10px', marginBottom: '10px', backgroundColor: '#cecece' }} />
                    <Col>
                        <p>messgae</p>
                    </Col>
                </Col>
            </Row>
            <Row className='icon' justify={'start'} style={{color: 'white',paddingLeft: '65px', paddingTop: '30px'}}>
                <Col>
                    <ClockCircleOutlined style={{fontSize: '14px'}}/>
                </Col>
                <span style={{fontSize: '12px', marginLeft: '10px'}}>1 min ago</span>
            </Row>
        </Col>
    )
}
