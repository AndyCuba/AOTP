import { Link } from '@react-navigation/native';
import styled from 'styled-components/native';
import AppText from '../../components/AppText/AppText';

const StyledIntroView = styled.View`
    flex: 1;
`;

const StyledBackground = styled.ImageBackground`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
`;

const MainHeading = styled(AppText)`
    padding: 120px 0 10px;
    font-size: 40px;
    color: white;
    letter-spacing: 2px;
`;

const StyledLink = styled(Link)`
    border: 1px solid white;
    width: 200px;
    padding: 10px 20px;
    border-radius: 10px;
    margin-bottom: 10px;
    background: black;
    text-align: center;
`;

const StyledLinkText = styled(AppText)`
    color: white;
    font-size: 20px;
`;

export {
    StyledIntroView,
    StyledBackground,
    MainHeading,
    StyledLinkText,
    StyledLink
};