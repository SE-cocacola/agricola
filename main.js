const { app, BrowserWindow, screen } = require('electron')

function createWindow () {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    const win = new BrowserWindow({
        width: width,
        height: height,
        // fullscreen: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
