declare namespace TSUpload {
    /**
     * @description 上传框的属性
    */
    export interface Input {
        /**
         * @description 自定义样式
        */
        style?: React.CSSProperties;
        /**
         * @description 接收的文件类型
        */
        accept?: string;
        /**
         * @description 是否支持多选
        */
        multiple?: boolean;
        /**
         * @description input输入框是否可见
        */
        visible?: boolean;
        /**
         * @description input 点击后的回调事件
        */
        onAfterClick?: () => void;
        /**
         * @description input 变化后的回调事件
        */
        onAfterChange?: (fileList: File[]) => void
    }
    /**
     * @description 文件的属性
    */
    export interface File{
        /**
     * @description 文件标识
     */
    uuid: string;
    /**
     * @description 文件
     */
    file: any;
    /**
     * @description 文件类型
     */
    fileType: string;
    /**
     * @description 文件本地预览
     */
    base64URL: string;
    /**
     * @description 释放本地预览URL
     */
    revokeFileBase64URL: (base64URL: string) => void;
    /**
     * @description 文件上传
     */
    upload?: () => void;
    /**
     * @description 取消上传
     */
    cancel?: () => void;
    /**
     * @description 重传
     */
    retry?: () => void;
    }
}