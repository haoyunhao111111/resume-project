import React from "react";
import fileAction from "@common/utils/file";
import { getAppPath } from "@common/utils/appPath";
import './index.less'
function Resume() {
    getAppPath().then((rootPath: string) => {
        fileAction.read(rootPath + 'app/renderer/container/resume/index.tsx').then(data => {
            console.log(data)
        })
    })
    return <div>我是简历组件</div>
}
export default Resume