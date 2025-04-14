import { FaBell } from "react-icons/fa";
import { Button, Dropdown, Space } from 'antd';
import style from './style/Notification.module.css';
import rasm from '../image/profile.webp';
const items = [
    {
        key: '1',
        label: (
            <div>
                <img src={rasm} className={style.rasm} />
                <span>BEK</span>
            </div>
        )
    },
    {
        key: '2',
        label: (
            <div>
                <img src={rasm} className={style.rasm} />
                <span>BEK</span>
            </div>
        ),
    },
    {
        key: '3',
        label: (
            <div>
                <img src={rasm} className={style.rasm} />
                <span>BEK</span>
            </div>
        ),
    },
];

export default function Notification({ }) {
    return (
        <Space direction="vertical">
            <Space wrap>
                <Dropdown menu={{ items }} placement="bottomRight">
                    <Button className={style.btn}><FaBell className={style.bell} /></Button>
                </Dropdown>
            </Space>
        </Space>

    )
}
