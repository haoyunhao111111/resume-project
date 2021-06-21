import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { shell } from "electron";
import { useSelector, useDispatch } from "react-redux";
import { ROUTER_ENTRY } from "@src/common/constants/route";
import { isHttpOrHttpsUrl } from "@common/utils/router"
import './index.less';
import Logo from '@assets/logo.png'
function Root() {
    const [state, setState] = useState('a');
    console.log(state, 'state');
    console.log(setState, 'setState');
    const appName = useSelector((state: any) => state.globalModel.appName);
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch({
                type: 'globalModel/setStore',
                payload: {
                    key: 'appName',
                    values: '简历哈哈哈'
                }
            })
        }, 3000)
    }, [])
    useEffect(() => {
        console.log('appName=', appName)
     }, [appName])
    const history = useHistory()
    const onRouterToLink = (router: TSRouter.Item) => {
        if (!isHttpOrHttpsUrl(router.url)) {
            history.push('/resume')
        } else {
            shell.openExternal('https://github.com/PDKSophia/visResumeMook');
        }
    }
    return (
        <div styleName="root">
            <div styleName="container">
                <img styleName="logo" src={Logo} alt="logo" />
                <div styleName="title">visResumeMock</div>
                <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
                <div styleName="action">
                    {
                        ROUTER_ENTRY.map((router: TSRouter.Item) => {
                            return (
                                <div key={router.key} styleName="action-item" onClick={() => onRouterToLink(router)}>{ router.text }</div>
                            )
                         })
                    }
                </div>
                <div styleName="copyright">
                    <div styleName="footer">
                        <p styleName="copyright">
                        Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By pengdaokuan
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Root