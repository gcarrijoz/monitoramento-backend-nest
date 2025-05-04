// websocket.gateway.ts
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { OnModuleInit } from '@nestjs/common';
import { Server } from 'socket.io';

@WebSocketGateway(3001, {
  path: '/websocket',
  cors: {
    origin: '*',
    methods: '*'
  },
  serveClient: false,
})
export class WebSocketGatewayApp implements OnModuleInit {
  @WebSocketServer()
  public server: Server;

  onModuleInit() {
    console.log('WebSocket Gateway inicializado');
  }

  // Método para emitir eventos de forma segura
  public emitEvent(event: string, payload: any) {
    if (this.server) {
      this.server.emit(event, payload);
    } else {
      console.warn('WebSocket server não está pronto para emitir eventos');
    }
  }
}