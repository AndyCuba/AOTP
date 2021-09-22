import styled from 'styled-components/native';

type StyledAvatarView = {
    paddingTop: number,
};

const StyledAvatarView = styled.View<StyledAvatarView>`
    flex: 1;
    align-items: center;
    padding-top: ${props => props.paddingTop}px;
`;

export {
    StyledAvatarView,
};