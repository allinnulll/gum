const _NetWork = {
    post: (props) => {
        return _fetch(props.url, "POST", props)
    },
    get: (props) => {
        return _fetch(props.url, "GET", props)
    },
    _fetch: (url, method, props) => {
        return fetch(url, {
            method: method,
            /* 携带cookie */
            credentials: 'include',
            headers: {
                'Accept': 'appliaction/json,text/plain,*/*',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: props.data
        }).then(res => {
            if (res.status === 200) {
                return res.json()
            } else {
                res.text().then(text => {
                    return Promise.reject(new Error(`${url}-->${text}-->${res.status}`))
                })
            }

        })
    },
    objparams: (props) => {
        props.dataType
        props.data
    }
}

let post = _NetWork.post;
let get = _NetWork.get;

// 调用方法
// import { post } from 'xxx/xxx/fetch'

// post('url', {/* 这里是json数据 */}).then(res=>{
//     //to do Sth
// }).catch(err=>{
//     console.error(err)
// })
export { post, get }