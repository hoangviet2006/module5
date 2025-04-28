let productService = [
    {
        id:1,
        codeProduct: 'XX1',
        nameProduct: 'Máy Giặt',
        quantity: 10,
        price: 15000000
    },
    {
        id:2,
        codeProduct: 'XX2',
        nameProduct: 'Tủ Lạnh',
        quantity: 15,
        price: 25000000
    },
    {
        id:3,
        codeProduct: 'XX3',
        nameProduct: 'TiVi',
        quantity: 15,
        price: 10000000
    },
    {
        id:4,
        codeProduct: 'XX4',
        nameProduct: 'Điều Hoà',
        quantity: 15,
        price: 15000000
    },
    {
        id:5,
        codeProduct: 'XX5',
        nameProduct: 'Máy Quạt',
        quantity: 15,
        price: 20000000
    }

]
export function getAllProduct(){
    return productService;
}
export function createProduct(newProduct){
    return productService.push(newProduct);
}