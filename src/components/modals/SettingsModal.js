import { SettingOutlined, UploadOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Form, Input, Modal, Row, Upload } from 'antd'
import React, { useState } from 'react'
import face from '../../face.jpg'

export const SettingsModal = (props) => {
    const [buttonLoading, setButtonLoading] = useState(false);
    const layout = {
        labelCol: {
            span: 7,
        },
        wrapperCol: {
            span: 15,
        },
    };

    const buttonClick = () => {
        setButtonLoading(true)
        setTimeout(() => {
            setButtonLoading(false)
        }, 2000);
    }
    return (
        <Modal open={props.open} width={'70%'} footer={null} onCancel={props.close} style={{ top: 10 }}>
            <Row justify={'center'}>
                <Col>
                    <span className='h2-custom'>
                        <SettingOutlined style={{ paddingRight: '5px' }} />
                        Settings
                    </span>
                </Col>
                <Divider style={{ margin: '10px' }} />
                <Col style={{ width: '100%' }}>
                    <Divider orientation='left'>Change profile picture</Divider>
                    <Row justify={'center'} style={{ marginBottom: '20px' }}>
                        <Col>
                            <img src={face} style={{ borderRadius: '50%', width: '10rem', display: 'block' }} alt={'pic'}></img>
                        </Col>

                    </Row>
                    <Row justify={'center'}>
                        <Col>
                            <Upload {...props}>
                                <Button icon={<UploadOutlined />}>Change picture</Button>
                            </Upload>
                        </Col>
                    </Row>
                </Col>

                <Col span={24}>
                    <Divider orientation='left'>Change username</Divider>
                    <Form {...layout}>
                        <Form.Item name={'username'} label={'New username'} rules={[{ required: true }]}>
                            <Input style={{ width: '100%' }} placeholder={'Type your new username...'}/>
                        </Form.Item>

                        <Form.Item name={'password'} label={'Password'} rules={[{ required: true }]}>
                            <Input type='password' style={{ width: '100%' }} placeholder={'Type your password...'}/>
                        </Form.Item>
                        <Row justify={'end'}>
                            <Button type='primary' loading={buttonLoading} onClick={buttonClick}>Change username</Button>
                        </Row>
                    </Form>
                </Col>

                <Col span={24}>
                    <Divider orientation='left'>Change e-mail address</Divider>
                    <Form {...layout}>
                        <Form.Item name={'email'} label={'Change e-mail'} rules={[{ required: true }]}>
                            <Input type='email' style={{ width: '100%' }} placeholder={'Type your current e-mail...'} />
                        </Form.Item>
                        <Row justify={'end'}>
                            <Button type={'primary'}>Send e-email</Button>
                        </Row>
                    </Form>
                </Col>
                <Col span={24}>
                    <Divider orientation='left'>Change password</Divider>
                    <Form {...layout}>
                        <Form.Item name={'current-password'} label={'Current password'} rules={[{ required: true }]}>
                            <Input style={{ width: '100%' }} placeholder={'Type your current password...'}/>
                        </Form.Item>

                        <Form.Item name={'new-password'} label={'New password'} rules={[{ required: true }]}>
                            <Input type='password' style={{ width: '100%' }} placeholder={'Type your new password...'}/>
                        </Form.Item>

                        <Form.Item name={'new-password-again'} label={'Password again'} rules={[{ required: true }]}>
                            <Input type='password' style={{ width: '100%' }} placeholder={'Type your new password again...'}/>
                        </Form.Item>
                        <Row justify={'end'}>
                            <Button type='primary' loading={buttonLoading} onClick={buttonClick}>Change username</Button>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Modal>
    )
}
