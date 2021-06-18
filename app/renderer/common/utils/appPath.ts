import { ipcRenderer } from 'electron';
export function getAppPath() {
    type MyResolve = (value: string) => void
    type MyReject = (value: Error) => void
    return new Promise((resolve: MyResolve, reject: MyReject) => {
        ipcRenderer.send('get-root-path', '');
        ipcRenderer.on('reply-root-path', (event, arg: string) => {
            if (arg) {
                resolve(arg)
            } else {
                reject(new Error('项目路径错误'))
            }
        })
    })
 }