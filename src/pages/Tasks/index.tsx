import React, { useEffect, useState }  from "react";
import { View, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import styles from "./styles";

interface Storage {
    login?: string;
    password?: string;
    username?: string;
    user_initials?: string;
    user_logon?: string;
    tasks?: string;
}

export default function Tasks() {
    const [ storage, setStorage ] = useState<Storage>({})

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            setStorage({
                login: AsyncStorage.getItem('login'),
                password: AsyncStorage.getItem('password'),
                username: AsyncStorage.getItem('username'),
                user_initials: AsyncStorage.getItem('user_initials'),
                user_logon: AsyncStorage.getItem('user_logon'),
                tasks: AsyncStorage.getItem('tasks'),
            });
        } catch (error){
            console.log(error)
        }
    }

    return(
        <View>
            <Text>Tarefas....</Text>
            <Text>Nome: {storage.username}</Text>
        </View>
    )
}