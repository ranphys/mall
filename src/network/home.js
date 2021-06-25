import { request } from './request'

export function getHomeMultiData() {
    return request({
        url: '/profile'
    });
}
export function getHomeGoods(type, page) {
    return request({
        url: '/goods',
        params: {
            type,
            page
        }
    });
}