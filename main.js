const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

let win

function createWindow() {
  win = new BrowserWindow({
    width: 260,
    height: 520,
    minWidth: 180,
    minHeight: 360,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: true,
    skipTaskbar: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('close-app', () => {
  app.quit()
})

ipcMain.on('minimize-app', () => {
  win.minimize()
})
