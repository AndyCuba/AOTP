import styled from 'styled-components/native';
import AppText from '../../components/AppText/AppText';

type ViewProps = {
    paddingTop: number,
};

const StyledSettingsView = styled.View<ViewProps>`
    flex: 1;
    align-items: center;
    padding: ${props => props.paddingTop}px 0 ${props => props.paddingTop - 5}px;
`;

const StyledSettingsWrapper = styled.View`
    flex: 1;
    width: 400px;
    border: 1px solid gray;
    border-radius: 10px;
`;

const StyledBackground = styled.ImageBackground`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
`;

const StyledHeading = styled(AppText)`
    font-size: 30px;
    color: white;
    padding: 20px 0;
`;

const StyledMusicSwitch = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-end;
    padding-bottom: 40px;
    width: 200px;
`;

const StyledSwitch = styled.Switch`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export {
    StyledSettingsView,
    StyledSettingsWrapper,
    StyledBackground,
    StyledHeading,
    StyledMusicSwitch,
    StyledSwitch
};