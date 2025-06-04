let ws: WebSocket | null = null;

function getWebSocketUrl(): string {
  // Check for environment variable first
  if (import.meta.env.VITE_WS_URL) {
    return import.meta.env.VITE_WS_URL;
  }
  
  // In development, use localhost
  if (import.meta.env.DEV) {
    return 'ws://172.16.62.127/socket';
  }
  
  // In production without explicit URL, return empty string
  // This allows for graceful degradation
  return '';
}

export function getWebSocket(): WebSocket | null {
  const wsUrl = getWebSocketUrl();
  
  // If no WebSocket URL, return null for graceful degradation
  if (!wsUrl) {
    console.log('WebSocket URL not configured');
    return null;
  }
  
  if (!ws || ws.readyState === WebSocket.CLOSED) {
    try {
      ws = new WebSocket(wsUrl);
      console.log(`Connecting to WebSocket at ${wsUrl}`);
    } catch (error) {
      console.error('Failed to create WebSocket connection:', error);
      return null;
    }
  }
  return ws;
}

export function closeWebSocket() {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.close();
    ws = null;
  }
}
