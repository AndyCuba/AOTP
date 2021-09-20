import { 
    InitialMusicStateType, 
    MusicActionsTypes, 
    ResetMusicStateActionType, 
    ToggleMusicActionType,
} from './musicTypes';

//Actions
const TOGGLE_MUSIC = 'TOGGLE_MUSIC';
const RESET_STATE = 'MUSIC/RESET_STATE';

//Action creators
const toggleMusic = (): ToggleMusicActionType => ({
    type: TOGGLE_MUSIC,
});

const resetMusicState = (): ResetMusicStateActionType => ({
    type: RESET_STATE,
});

//Initial state
const initialMusicState: InitialMusicStateType = {
    music: true,
};

//Reducer
const musicReducer = (state = initialMusicState, action: MusicActionsTypes) => {
    switch (action.type) {
        case TOGGLE_MUSIC:
            return {
                ...state,
                music: !state.music,
            };
        case RESET_STATE:
            return initialMusicState;
        default:
            return { ...state };
    };
};

export {
    TOGGLE_MUSIC,
    RESET_STATE,
    toggleMusic,
    resetMusicState,
    musicReducer,
};