import * as React from 'react';
import { ScrollView,View, Text } from 'react-native';
import HomeCards from './HomeCards';

export default function HomeScreen({ navigation }) {
    return (              
            <>
            <Text>TRENDING CONTESTS</Text>
            <ScrollView>
                <HomeCards/>
            </ScrollView>
        </>
    );
}
