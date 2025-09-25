import React from 'react';
import { SafeAreaView } from 'react-native';

import ColorChangerApp from './ColorChangerApp';
import CounterApp from './CounterApp';
import ChatBox from './ChatBox';
import Comment from './CommentInput'
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
     
      <ColorChangerApp/>
      <CounterApp/>
      <ChatBox/>
      <CommentInput/>
    </SafeAreaView>
  );
}