import React from 'react';
import { SafeAreaView } from 'react-native';
import CommentInput from './CommentInput';
import ChatBox from './ChatBox';
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
     
      <ChatBox/>
      <CommentInput/>
    </SafeAreaView>
  );
}