const { app, BrowserWindow, ipcMain } = require('electron')

let win
let isMini = false
const NORMAL_W = 260, NORMAL_H = 540
const MINI_W = 64, MINI_H = 64

function createWindow() {
  win = new BrowserWindow({
    width: NORMAL_W,
    height: NORMAL_H,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: true,
    minWidth: 160,
    minHeight: 320,
    skipTaskbar: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => app.quit())

ipcMain.on('close-app', () => app.quit())

ipcMain.on('toggle-mini', () => {
  if (!isMini) {
    win._normalSize = win.getSize()
    win.setResizable(false)
    win.setMinimumSize(MINI_W, MINI_H)
    win.setSize(MINI_W, MINI_H)
    isMini = true
  } else {
    const [w, h] = win._normalSize || [NORMAL_W, NORMAL_H]
    win.setMinimumSize(160, 320)
    win.setSize(w, h)
    win.setResizable(true)
    isMini = false
  }
  win.webContents.send('mini-state', isMini)
})
