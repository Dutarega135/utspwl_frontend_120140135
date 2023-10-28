import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Input,
} from "@material-tailwind/react";

import { BsPlusLg } from "react-icons/bs";

export default function ModalForm({ addProduct }) {
  const [open, setOpen] = React.useState(false);
  const [nama, setNamaProduk] = useState("");
  const [stok, setStokProduk] = useState(0);
  const [harga, setHargaProduk] = useState(0);

  const handleOpen = () => setOpen(!open);
  const onSubmitHandle = (e) => {
    e.preventDefault();
    addProduct({
      id: uuid(),
      nama,
      harga,
      stok,
      image: "../src/assets/rekomendasi_2.png",
    });

    setNamaProduk("");
    setStokProduk(0);
    setHargaProduk(0);
  };

  return (
    <>
      <Button onClick={handleOpen} variant="gradient" className="flex gap-3">
        <BsPlusLg size={20} />
        Tambah Produk
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Form Produk</DialogHeader>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={onSubmitHandle}
        >
          <DialogBody>
            <Typography color="gray" className="mt-1 font-normal">
              Enter your details to Produk.
            </Typography>

            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Nama Produk
              </Typography>
              <Input
                type="text"
                size="lg"
                placeholder="VGA Geforce"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => setNamaProduk(e.target.value)}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Stok Produk
              </Typography>
              <Input
                type="number"
                size="lg"
                placeholder="10"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => setStokProduk(e.target.value)}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Harga Produk
              </Typography>
              <Input
                type="number"
                size="lg"
                placeholder="100000"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                onChange={(e) => setHargaProduk(e.target.value)}
              />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button
              type="submit"
              variant="gradient"
              color="green"
              onClick={handleOpen}
            >
              <span>Tambah</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}
