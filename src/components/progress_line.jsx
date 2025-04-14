import React from 'react';
import { Flex, Progress } from 'antd';

const Progress_line = ({percent}) => (
    <Flex vertical gap="middle">
        <Progress percent={percent} status="active" strokeColor={{ from: '#017e6b', to: '#014238' }} />
    </Flex>
);
export default Progress_line;