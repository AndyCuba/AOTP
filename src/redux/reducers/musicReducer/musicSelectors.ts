import { AppStateType } from '../../store';

const musicSelector = (state: AppStateType) => state.musicData.music;

export {
    musicSelector,
};
