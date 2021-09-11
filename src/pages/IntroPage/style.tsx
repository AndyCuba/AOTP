import styled from 'styled-components/native';

type MainHeadingType = {
    fontFamily: string
}

const StyledIntroView = styled.View`
    flex: 1;
`;

const StyledBackground = styled.ImageBackground`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
`;

const MainHeading = styled.Text<MainHeadingType>`
    padding-top: 120px;
    font-size: 40px;
    font-family: ${props => props.fontFamily};
    color: white;
    letter-spacing: 2px;
`;
export {
    StyledIntroView,
    StyledBackground,
    MainHeading
};