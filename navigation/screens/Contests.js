import * as React from 'react';
import { ScrollView,View, Text } from 'react-native';
import ContestCard from './ContestCard';


export default function Contests({ navigation }) {
    return (
    <>
        <ScrollView>            
            <ContestCard/>
        </ScrollView>
    </>
    );
}