var catalog = [
    {
        _id: "5f40a6baac77a903d8f682c6",
        price: 12.32,
        stock: 13,
        title: "Cabbage",
        image: "img-1.jpg",
        discount: 5,
        category: "Vegetable",
      },
      {
        _id: "5f40a6ba41d9e5044ced586c",
        price: 22.71,
        stock: 21,
        title: "Strawberry",
        image: "product-6.jpg",
        discount: 10,
        category: "Fruit",
      },
      {
        _id: "5f40a6baa9e6e22fa1d5fac4",
        price: 32.0,
        stock: 20,
        title: "Bell pepper",
        image: "img-14.jpg",
        discount: 0,
        category: "Vegetable",
      },
      {
        _id: "5f40a6baf0f068a497921d29",
        price: 6.99,
        stock: 10,
        title: "Carrot",
        image: "img-4.jpg",
        discount: 0,
        category: "Vegetable",
      },
      {
        _id: "5f40a866337a3bb00793da52",
        price: 16.39,
        stock: 34,
        title: "Banana",
        image: "img-5.jpg",
        discount: 4,
        category: "Fruit",
      },
      {
        _id: "5f40a866ea0a04e6891b7084",
        price: 14.0,
        stock: 14,
        title: "Orange",
        image: "product-10.jpg",
        discount: 0,
        category: "Fruit",
      },
      {
        _id: "5f40a866ea0a04e6891212333",
        price: 12.0,
        stock: 11,
        title: "Egg",
        image: "img-15.jpg",
        discount: 12,
        minimum: 6,
        category: "Dairy & Eggs",
      },
      {
        _id: "5f40a866ea0a04e68911231328",
        price: 19.1,
        stock: 11,
        title: "Orange Juice",
        image: "product-15.jpg",
        discount: 12,
        category: "Beverages",
      },
]

class ItemService{
    
    getCatalog(){
      //put the logic to call a server
      //retrieve array

      //return mock data (not for production)
      return catalog;

    }

    saveItem(item){

    }

    getItemDetails(id){

    }

}
export default ItemService;