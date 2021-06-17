/**
 * @description 判断是不是外链
 * @param { string } url 链接
 */
export function isHttpOrHttpsUrl(url: string): boolean {
    let regRule = /(http|https):\/\/([\w.]+\/?)\S*/;
    return regRule.test(url.toLowerCase());
}