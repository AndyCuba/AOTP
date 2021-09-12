import React, { useEffect } from 'react';
import { Audio } from 'expo-av';

export default function BackgroundMusic() {
    async function playMusic() {
        const { sound } = await Audio.Sound.createAsync(
            require('../../../assets/audio/bgMusic.mp3')
        );

        await sound.playAsync();
    };

    useEffect(() => {
        playMusic();
    }, []);

    return(
        <></>
    );
};