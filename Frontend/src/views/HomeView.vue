<template>
  <div class = "container">
    <CodeEditor :value='arduinoCode' :display_language="false" min_width = '1000px' min_height = '720px'></CodeEditor>
  <div><button @click="runCode">코드 실행</button>
    <button @click="compileCode">코드 컴파일</button></div>
  <!-- <wokwi-led color="red" /> -->
  </div>
  <Chat :chat="chatData" :onSend="getData" height='1200px' />
</template>

<script setup>
    import '@wokwi/elements';
    import CodeEditor from 'simple-code-editor';
    import axios from 'axios';
    import { Chat } from "@chat-ui/vue3";
    import { computed, ref, watch, watchEffect } from "vue";
    import { parse } from 'intel-hex';
    import {
      CPU,
      avrInstruction,
      AVRIOPort,
      portDConfig,
      PinState,
      AVRTimer,
      timer0Config
    } from 'avr8js';

    const arduinoCode = `
void setup() {
  // put your setup code here, to run once:
  pinMode(7, OUTPUT); 
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(7, HIGH);
  delay(1000);
  digitalWrite(7, LOW);
  delay(1000);
}
`;
    const chatData = ref([
    { message: '안녕하세요 ! 쿠노소프트 챗봇입니다. 무엇을 도와드릴까요 ?', type: 'chatbot', timestamp: '9:00 AM'}
])
    async function compileCode() {
          try {
            const res = await axios.get('/api/compile', {params:
              arduinoCode})
            console.log(res.data)
          } catch (err) {
            console.error(err)
          }
        }
    const runCode = async () => {
    // Compile the arduino source code
    // console.log(arduinoCode)
    const result = await fetch('https://hexi.wokwi.com/build', {
      method: 'post',
      body: JSON.stringify({ sketch: arduinoCode }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const { hex, stderr } = await result.json();
    if (!hex) {
      alert(stderr);
      return;
    }
    console.log(hex);

    // const { hex_data } = parse(hex);
    // const progData = new Uint8Array(hex_data);
    // console.log(progData);
      // Set up the simulation
      // const cpu = new CPU(new Uint16Array(progData.buffer));
      // // Attach the virtual hardware
      // const port = new AVRIOPort(cpu, portDConfig);
      // port.addListener(() => {
      //   const turnOn = port.pinState(7) === PinState.High;
      //   setLedState(turnOn);
      //   console.log('LED', turnOn);
      // });
      // const timer = new AVRTimer(cpu, timer0Config);
      // // Run the simulation
      // while (true) {
      //   for (let i = 0; i < 500000; i++) {
      //     avrInstruction(cpu);
      //     timer.tick();
      //   }
      //   await new Promise(resolve => setTimeout(resolve));
      // }
        }

    function formatAMPM(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }
;
    async function getData(message) {
      try {
        const chat_log = {
          message : message,
          type: 'person',
          timestamp: new Date()
          }
        chatData.value.push(chat_log)
        const res = await axios.get('/api/chat', {params:
          chat_log})
        chatData.value.push({message : res.data,
          type: 'chatbot',
          timestamp: new Date()})
      } catch (err) {
        console.error(err)
      }
    }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }
</style>