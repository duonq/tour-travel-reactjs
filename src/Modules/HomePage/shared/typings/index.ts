type ITypeListBanner = {
    id: number
    url: string
    alt: string
}

type ITypeListService = {
    id: number
    type?: string
    name: string
    price: string
    description?: string
    img: string
    extraService?: string
}
export type {
    ITypeListBanner,
    ITypeListService
}