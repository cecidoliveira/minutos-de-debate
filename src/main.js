const { app, BrowserWindow, nativeImage } = require('electron')
const path = require('node:path')
const appIcon = nativeImage.createFromPath(path.resolve(__dirname, 'assets', 'timer-icon.png'));

const createWindow = () => {
    const timerWin = new BrowserWindow({
        x: 50,
        y: 60,
        icon: appIcon,
        minHeight:630,
        minWidth: 800, 
        autoHideMenuBar: true,
        backgroundColor: "#2962D6",
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        }
    })
    timerWin.loadFile(path.resolve(__dirname, 'pages', 'timer/index.html'))

    const configWin = new BrowserWindow({
        x: 100,
        y: 110,
        timerWin,
        modal: true,
        icon: appIcon,
        minWidth: 740,
        minHeight: 500,
        autoHideMenuBar: true,
        fullscreenable: false,
        backgroundColor: "#2962D6"
    })
    configWin.loadFile(path.resolve(__dirname, 'pages', 'config/index.html'))

    // Open the DevTools.
    // timerWin.webContents.openDevTools();
    // configWin.webContents.openDevTools();
}

if (require('electron-squirrel-startup')) app.quit();

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})