



import {BaseService} from "./base-services"

export abstract class Services extends BaseService{
    static async getAllProductById(id:any){
        var productRespond = await fetch(`${this.base_url }/products/`+id)
        var product = productRespond.json()
        return product
    }
}