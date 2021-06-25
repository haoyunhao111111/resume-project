import { createUID} from '@common/utils'
class FileEvent {
    public uuid: string
    public file: any
    public fileType: string
    public base64URL: string
    constructor(file: any) {
        this.uuid = createUID();
        this.file = file;
        const types = file?.type?.split('/') || [];
        this.fileType = types.length ? types[0] : '';
        this.base64URL = window.URL.createObjectURL(file);
    }
    // 释放base64Url地址，要不会有性能问题
    public revokeFileBase64URL(base64Url: string) {
        window.URL.revokeObjectURL(base64Url)
    }
    public upload() { }
    public cancel() { }
    public retry() { }
}
export default FileEvent