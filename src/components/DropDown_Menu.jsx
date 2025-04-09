import React from 'react';
import { FaBars } from "react-icons/fa";
import { Dropdown, message, Space } from 'antd';
import H_profile from './H_profile';
import Favorites from "./Favoriets";
import Notification from "./Notification";
const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
};
const items = [
    {
        label: <H_profile/>,
        key: '1',
    },
    {
        label: <Favorites/> ,
        key: '2',
    },
    {
        label: <Notification/>,
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