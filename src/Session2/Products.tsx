import React from "react";
import Rating from "./Rating";
import Percentage from "./Percentage";
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    imageUrl:
      "https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    imageUrl:
      "https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    imageUrl:
      "https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg",
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    imageUrl:
      "https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg",
  },
  {
    id: 5,
    name: "Product 5",
    price: 500,
    imageUrl:
      "https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg",
  },
  {
    id: 6,
    name: "Product 6",
    price: 600,
    imageUrl:
      "https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg",
  },
  {
    id: 7,
    name: "Product 7",
    price: 700,
    imageUrl:
      "https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg",
  },
  {
    id: 8,
    name: "Product 8",
    price: 800,
    imageUrl:
      "https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg",
  },
  {
    id: 9,
    name: "Product 9",
    price: 900,
    imageUrl:
      "https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg",
  },
  {
    id: 10,
    name: "Product 10",
    price: 1000,
    imageUrl:
      "https://binhminhdigital.com/StoreData/PageData/3429/Tim-hieu-ve-ban-quyen-hinh-anh%20(3).jpg",
  },
];
type Props = {};
function Product({ item }: any) {
  return (
    <div>
      <div>
        <img
          src="https://bizweb.dktcdn.net/100/438/408/files/anh-co-4-la-yody-vn.jpg?v=1683597022341"
          style={{ width: 300, height: 300 }}
        ></img>
        <h3>{item.name}</h3>
        <strong>${item.price}</strong>
        <Rating starts={4} />
        <Percentage value={60} />
      </div>
    </div>
  );
}
export default function Products({}: Props) {
  return (
    <div>
      {products.map((item, index) => {
        return <Product key={item.id} item={item} />;
      })}
    </div>
  );
}
