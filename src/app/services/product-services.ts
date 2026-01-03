

import {BaseService} from "./base-services"

export abstract class Services extends BaseService{
    static async getAllProducts(){
        var productRespond = await fetch(`${this.base_url }/products`)
        var products = productRespond.json()
        return products
    }
}