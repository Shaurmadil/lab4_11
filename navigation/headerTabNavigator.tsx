import React, { useEffect, useState } from "react";
import {createDrawerNavigator} from '@react-navigation/drawer';
import Lab4 from '../labs/lab4/lab4';
import Lab6 from '../labs/lab6/lab6';
import Lab7 from '../labs/lab7/lab7';
import Lab8 from '../labs/lab8/lab8';
import Lab10 from '../labs/lab10/lab10';
import { ActivityIndicator } from "react-native";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, push } from "firebase/database";
import useStore from "../labs/lab10/store";
const Drawer = createDrawerNavigator();

//config

const firebaseConfig = {
    apiKey: "AIzaSyCM8SvIP5OaWiLCjoP_jmZiFaY9KqCyouU",
    authDomain: "lab11tsx.firebaseapp.com",
    databaseURL: "https://lab11tsx-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lab11tsx",
    storageBucket: "lab11tsx.appspot.com",
    messagingSenderId: "485516940409",
    appId: "1:485516940409:web:16beb3917c753febb9f0a8"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

function headerTabNavigator() {
    const position = useStore((state: any) => state.position);
    const setPosition = useStore((state: any) => state.setPosition);
    const workers = useStore((state: any) => state.workers);
    const setWorkers = useStore((state: any) => state.setWorkers);

    const activePos = useStore((state: any) => state.activePos);
    const setActivePos = useStore((state: any) => state.setActivePos);

    useEffect(() => {
        onValue(ref(db, "Position"), (querySnapShot) => {
            const data = querySnapShot.val();
            const data2: any[] = [];
            if (Array.isArray(data)) {
                setPosition(data);
                return;
            }
            for (let key in data) {
                data2.push(data[key]);
            }
            setPosition(data2);
        });
        onValue(ref(db, "Worker"), (querySnapShot) => {
            const data = querySnapShot.val();
            const data2: any[] = [];
            if (Array.isArray(data)) {
                setWorkers(data);
                return;
            }
            for (let key in data) {
                data2.push(data[key]);
            }
            setWorkers(data2);
        });

        setActivePos(position[0]);
    }, []);
    if (!activePos || position.length === 0 || workers.length === 0) {
        return <ActivityIndicator></ActivityIndicator>;
    }
  return (
    <Drawer.Navigator useLegacyImplementation={true}>
        <Drawer.Screen
            name='Lab4'
            component={Lab4}
        />
        <Drawer.Screen
            name='Lab6'
            component={Lab6}
        />
                <Drawer.Screen
            name='Lab7'
            component={Lab7}
        />
        <Drawer.Screen
            name='Lab8/9'
            component={Lab8}
        />
        <Drawer.Screen
            name='Lab10'
            component={Lab10}
        />

    </Drawer.Navigator>
  );
}

export default headerTabNavigator;