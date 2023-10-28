// import { Card, Input, Typography, Button } from "@material-tailwind/react";
// import { useState } from "react";

// export default function FormProduk({ addProduct }) {

//   return (
//     <Card color="transparent" shadow={false}>
//       <form
//         className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
//         onSubmit={onSubmitHandle}
//       >
//         <div className="mb-1 flex flex-col gap-6">
//           <Typography variant="h6" color="blue-gray" className="-mb-3">
//             Nama Produk
//           </Typography>
//           <Input
//             type="text"
//             size="lg"
//             placeholder="VGA Geforce"
//             className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//             labelProps={{
//               className: "before:content-none after:content-none",
//             }}
//             onChange={(e) => setNamaProduk(e.target.value)}
//           />
//           <Typography variant="h6" color="blue-gray" className="-mb-3">
//             Stok Produk
//           </Typography>
//           <Input
//             type="number"
//             size="lg"
//             placeholder="10"
//             className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//             labelProps={{
//               className: "before:content-none after:content-none",
//             }}
//             onChange={(e) => setStokProduk(e.target.value)}
//           />
//           <Typography variant="h6" color="blue-gray" className="-mb-3">
//             Harga Produk
//           </Typography>
//           <Input
//             type="number"
//             size="lg"
//             placeholder="100000"
//             className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
//             labelProps={{
//               className: "before:content-none after:content-none",
//             }}
//             onChange={(e) => setHargaProduk(e.target.value)}
//           />
//         </div>
//       </form>
//     </Card>
//   );
// }
