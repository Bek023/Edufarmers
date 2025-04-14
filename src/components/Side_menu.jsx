import React, { useState } from 'react';
import {
    AppstoreOutlined,
    CalendarOutlined,
    LinkOutlined,
    MailOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';
import { useNavigate } from 'react-router-dom';
const items = [
    {
        key: '/',
        icon: <MailOutlined />,
        label: 'Dashboard',
    },
    {
        key: '/Explore',
        icon: <CalendarOutlined />,
        label: 'Explore',
    },
    {
        key: 'sub1',
        label: 'My Learning',
        icon: <AppstoreOutlined />,
    },
    {
        key: 'sub2',
        label: 'Settings',
        icon: <SettingOutlined />,
    },

];
const Side_menu = () => {
    let navigate = useNavigate();
    const [mode, setMode] = useState('vertical');
    const [theme, setTheme] = useState('light');
    //   const changeMode = value => {
    //     setMode(value ? 'vertical' : 'vertical');
    //   };
    //   const changeTheme = value => {
    //     setTheme(value ? 'dark' : 'light');
    //   };
    const Click = e => {
        if (e.key !== 'link') {
            navigate(e.key);
        };
    };
    return (
        <>
            <Menu
                style={{ width: 256 , borderRight: '1px solid black'}}
                defaultSelectedKeys={['1']}
                // defaultOpenKeys={['sub1']}
                // mode={mode}
                // theme={theme}
                items={items}
                onClick={Click}
            />
        </>
    );
};
export default Side_menu;