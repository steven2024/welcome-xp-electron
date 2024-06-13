const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  requestShutdown: () => ipcRenderer.send('shutdown-request')
});
