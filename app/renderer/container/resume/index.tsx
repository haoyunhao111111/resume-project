import React from "react";
import fileAction from "@common/utils/file";
import { getAppPath } from "@common/utils/appPath";
import Button from "@src/common/components/Button";
import './index.less'
function Resume() {
    getAppPath().then((rootPath: string) => {
        fileAction.read(rootPath + 'app/renderer/container/resume/index.tsx').then(data => {
            console.log(data)
        })
    })
    return <div>
        <Button children="导出" disabled={ true }></Button>
    </div>
}
export default Resume