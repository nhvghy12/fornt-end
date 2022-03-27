import React from "react";
import { Modal,Button } from "antd"

export function ChangePasswordModal() {
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    return (
        <>
            <Button type="primary" onClick={() => {setIsModalVisible(true)} }>
                Open Modal
            </Button>
            <Modal title="Basic Modal" visible={isModalVisible}
             onOk={() => {setIsModalVisible(false)}}
             onCancel={() => {setIsModalVisible(false)}}
             >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <input type="text" name="" id="" />
            </Modal>

        </>
    )
}