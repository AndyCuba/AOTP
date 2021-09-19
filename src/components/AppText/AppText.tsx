import React from 'react';
import { ReactChild, ReactChildren } from 'hoist-non-react-statics/node_modules/@types/react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

interface ChildrenProps {
    children: ReactChild | ReactChildren;
}

const StyledText = styled.Text`
    font-family: 'Underdog';
`;

export default function AppText(props: ChildrenProps) {
    return (
        <StyledText {...props}>
            {props.children}
        </StyledText>
    );
};