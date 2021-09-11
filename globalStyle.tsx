import styled from 'styled-components/native';
import { View, ImageBackground } from 'react-native';


type StyledTextType = {
    fontFamily: string
};

const StyledView = styled(View)`
    flex: 1;
`;

const StyledBackground = styled(ImageBackground)`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
`;

const MainHeading = styled.Text<StyledTextType>`
    padding-top: 60px;
    font-size: 40px;
    font-family: ${props => props.fontFamily};
    color: white;
    letter-spacing: 2px;
`;

export {
    StyledView,
    MainHeading,
    StyledBackground
};
