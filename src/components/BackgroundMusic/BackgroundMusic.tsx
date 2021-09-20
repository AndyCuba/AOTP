import React, { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import { useAppSelector } from '../../hooks/reduxHooks';
import { musicSelector } from '../../redux/reducers/musicReducer/musicSelectors';

export default function BackgroundMusic() {
    const isMusicPlaying = useAppSelector(musicSelector);
    const [sound, setSound] = useState<Audio.Sound>();

    const playMusic = async () => {
        try {
            const { sound } = await Audio.Sound.createAsync(
                require('../../../assets/audio/bgMusic.mp3')
            );
    
            setSound(sound);
    
            await sound.playAsync();
        } catch(error) {
            console.log(error);
        };
    };

    const stopMusic = async () => {
        try {
            await sound?.unloadAsync();
        } catch(error) {
            console.log(error);
        };
    };

    async function checkMusic() { 
        if(isMusicPlaying) {
            playMusic();
        } else {
            stopMusic();
        };
    };

    //Always unload the Sound after using it to prevent memory leaks.
    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync(); 
            } : undefined;
    }, [sound]);

    useEffect(() => {
        checkMusic();
    }, [isMusicPlaying])

    return(
        <></>
    );
};