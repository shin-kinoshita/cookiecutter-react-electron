import { BrowserWindow } from 'electron';

let win;

function createWindow() {
  win = new BrowserWindow({ width: 500, height: 350, resizable: true });
  win.loadURL(`file://${__dirname}/../../index.html`);
  win.on('close', () => {
    win = null;
  });
}

export default createWindow;
