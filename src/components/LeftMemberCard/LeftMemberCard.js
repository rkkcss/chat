import { Badge, Col, Row, Space } from 'antd'
import React from 'react'
import picture from '../../face.jpg'
import './LeftMemberCard.css'

export const LeftMemberCard = () => {
    return (
        <Col className='member-card'>
            <Row>
                <Col xl={6} md={24} sm={24} xs={24}>
                    <img src={picture} alt={'Pic'} className={'image-center-div left-menu-image'} />
                </Col>
                <Col xl={14} md={0} sm={0} xs={0} style={{ paddingLeft: '10px' }}>
                    <Col>
                        <span>Kiss Ferenc</span>
                    </Col>
                    <Col style={{ paddingTop: '15px' }}>
                        <span>Na és mi van veled? hogy vagy?</span>
                    </Col>

                </Col>
                <Col xl={4} md={0} sm={0} xs={0} style={{ textAlign: 'left' }}>
                    <Space direction={'vertical'} size={'small'}>
                        <Col span={24}>
                            <span>Yesterday</span>
                        </Col>
                        <Col span={24} className={'image-center-div'}>
                            <Badge count={2} size={'default'} style={{ backgroundColor: 'blue', color: 'white' }}></Badge>
                        </Col>
                    </Space>
                </Col>
            </Row>
        </Col>
    )
}
