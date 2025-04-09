import React from 'react';
import { FaBars } from "react-icons/fa";
import { Dropdown, message, Space } from 'antd';
const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
};
const items = [
    {
        label: '1st menu item',
        key: '1',
    },
    {
        label: '2nd menu item',
        key: '2',
    },
    {
        label: '3rd menu item',
        key: '3',
    },
];
const Menu = () => (
    <Dropdown menu={{ items, onClick }}>
        <a onClick={e => e.preventDefault()}>
            <Space>
                <FaBars />
            </Space>
        </a>
    </Dropdown>
);
export default Menu;