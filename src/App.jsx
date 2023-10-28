import Navbar from "./components/Navbar";
import ModalForm from "./components/ModalForm";
import CardProduk from "./components/CardProduk";

import { dataProduk } from "./utils/data";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function App() {
  const [products, setProducts] = useState([...dataProduk]);

  const addProduct = (product) => {
    setProducts([...dataProduk, product]);
  };

  return (
    <>
      <Navbar />
      <div className="mt-5 flex justify-end p-5">
        <ModalForm addProduct={addProduct} />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5">
        <CardProduk products={products} />
      </div>
    </>
  );
}
