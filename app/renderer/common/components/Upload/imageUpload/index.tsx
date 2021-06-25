/**
 * @description 上传控件，默认自带的input样式
 * @author {haoyunhao}
*/
import React, { useRef } from "react";
import classNames from "classnames";
import FileEvent from "../fileEvent";
import './index.less'

function Upload({style, accept, multiple, visible, onAfterChange, onAfterClick}:TSUpload.Input) {
    const inputSelector = useRef(null);
    function change(e:any) {
        const fileList = e?.target?.files || [];
        if (e.target.value === '') { return }
        const instance: TSUpload.File[] = []
        for (let item of fileList) {
            instance.push(new FileEvent(item))
        }
        onAfterChange && onAfterChange(instance)
    }
    return (
        <input
            type='file'
            style={style}
            multiple={multiple}
            accept={accept}
            ref={inputSelector}
            onClick={onAfterClick}
            onChange={change}
            className={classNames('my_input_selector', {
                'my_input_selector_visible': visible,
                'my_input_selector_hidden': !visible
            })}
        />
    )
}