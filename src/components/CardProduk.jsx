import Counter from "./Counter";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function CardProduk({ products }) {
  return (
    <>
      {products.map((product) => (
        <Card className="w-96 m-5 bg-[#D9D9D9]" key={product.id}>
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={product.image}
              alt="card-image"
              className=" w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {product.nama}
            </Typography>
            <Typography>Rp {product.harga}</Typography>
          </CardBody>
          <CardFooter className="pt-0 flex flex-col gap-3">
            <Counter />
            <Button>Checkout</Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
