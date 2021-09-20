import {
    TOGGLE_MUSIC,
    RESET_STATE,
} from './musicReducer';

// Action types
type ToggleMusicActionType = {
    type: typeof TOGGLE_MUSIC
};

type ResetMusicStateActionType = {
    type: typeof RESET_STATE
};


//Allowed action types
type MusicActionsTypes = ToggleMusicActionType | ResetMusicStateActionType;

//Initial state type
type InitialMusicStateType = {
    music: boolean,
};

export type {
    InitialMusicStateType,
    MusicActionsTypes,
    ToggleMusicActionType,
    ResetMusicStateActionType,
};