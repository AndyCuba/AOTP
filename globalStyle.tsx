import styled from 'styled-components/native';
import { View, Text, ImageBackground } from 'react-native';

const StyledView = styled(View)`
    flex: 1;
`;

const StyledBackground = styled(ImageBackground)`
    flex: 1;
    justify-content: center;
    justify-content: center;
    align-items: center;
`;

const MainHeading = styled(Text)`
    font-size: 30px;
    color: white;
`;

export {
    StyledView,
    MainHeading,
    StyledBackground
};
