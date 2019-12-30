const electron = require('electron')
const { app, BrowserWindow } = require('electron')

function isDev() {
    return process.env.NODE_ENV === 'development';
}
function createWindow() {
    console.log('asdasdas222')
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    
    // 如果是测试环境则监听本地8001端口，否则加载index.html文件
    console.log('asdasdadad', process.env.NODE_ENV )
    if (isDev()) {
        const ss = win.loadURL('http://localhost:8001/');
        console.log('ss', ss)
        win.webContents.openDevTools()
    } else {
        win.loadFile('./dist/renderer/index.html');
    }    
    win.on('closed', () => {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 与此同时，你应该删除相应的元素。
        win = null
    })
    // 打开开发者工具
}
app.on('ready', createWindow)