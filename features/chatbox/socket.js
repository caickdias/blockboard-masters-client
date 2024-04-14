"use client";

import { io } from "socket.io-client";

export const socket = io("https://tidy-signs-divide.loca.lt", {
  transports: ["websocket", "polling"]
});