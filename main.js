const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const childProcess = require('child_process');
const os = require('os');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')  // Preload script where IPC is defined
    }
  });

  win.loadFile(path.join(__dirname, 'public/index.html'));
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Listen for shutdown request from renderer process
ipcMain.on('shutdown-request', () => {
  const executablePath = path.join(__dirname, '/public/shutdown/XP_Shutdown.exe');
  if (os.platform() === 'win32') {
    // If the OS is Windows, run the executable directly
    childProcess.execFile(executablePath, (err, data) => {
      if (err) {
        console.error('Error executing shutdown on Windows:', err);
        return;
      }
      console.log('Shutdown executed on Windows:', data.toString());
    });
  } else if (os.platform() === 'linux') {
    // If the OS is Linux, run the executable using Wine
    childProcess.exec(`wine ${executablePath}`, (err, stdout, stderr) => {
      if (err) {
        console.error('Error executing shutdown with Wine on Linux:', err);
        return;
      }
      console.log('Shutdown executed with Wine on Linux:', stdout);
      if (stderr) {
        console.error('stderr:', stderr);
      }
    });
  }
});
