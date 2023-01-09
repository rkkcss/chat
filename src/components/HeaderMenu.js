import { SettingOutlined, UserOutlined } from '@ant-design/icons'
import { Col, Dropdown, Row } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SettingsModal } from './modals/SettingsModal'

export const HeaderMenu = () => {
    const [isModalOpen, setIsmodalOpen] = useState(false);

    const items = [
        {
            label: <Link>Saját profil</Link>,
            key: '0',
        },
        {
            label: <Link>Kijelentkezés</Link>,
            key: '1',
        },
    ];

    return (
        <Header className='menu'>
            <SettingsModal open={isModalOpen} close={() => setIsmodalOpen(false)}/>
            <Row justify={'end'} style={{ maxHeight: '50px', gap: '50px' }}>
                <Col>
                    <Link>
                        <SettingOutlined style={{ fontSize: '25px', color: '#f1f1f1' }} onClick={(e) => setIsmodalOpen(true)} />
                    </Link>
                </Col>
                <Col>
                    <Dropdown menu={{ items }} trigger={['click']}>
                        <Link onClick={(e) => e.preventDefault()}>
                            <UserOutlined style={{ fontSize: '25px', color: '#f1f1f1' }} />
                        </Link>
                    </Dropdown>
                </Col>
            </Row>
        </Header>
    )
}
