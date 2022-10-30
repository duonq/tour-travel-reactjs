type ITypeListBanner = {
    id: number
    url: string
    alt: string
}

type ITypeListService = {
    id: number
    type?: string
    name?: string
    price?: string
    description?: string
    img?: string
    extraService?: string
    address?: string
    from?: string
}
export type {
    ITypeListBanner,
    ITypeListService
}