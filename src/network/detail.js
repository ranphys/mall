import { request } from './request'

export function getDetail(id) {
    return request({
        url: '/detail',
        params: {
            id
        }
    });
}
export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo[0].title
        this.highPrice = itemInfo[0].highPrice
        this.lowPrice = itemInfo[0].lowPrice
        this.columns = columns
        this.services = services
    }
}
export class Shop {
    constructor(shopInfo) {
        this.name = shopInfo[0].name;
        this.logo = shopInfo[0].shopLogo;
        this.fans = shopInfo[0].cFans;
        this.sells = shopInfo[0].cSells;
        this.score = shopInfo[0].score;
        this.goodsCount = shopInfo[0].cGoods;
    }
}
export class rate {
    constructor(rate) {
        this.cRate = rate.cRate
        this.list = rate.list
    }
}