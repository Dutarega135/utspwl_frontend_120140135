import { Button } from "@material-tailwind/react";
import { useState } from "react";

export default function Counter() {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    setQuantity((previousState) => (quantity > 1 ? previousState - 1 : null));
  };

  const increaseQuantity = () => {
    setQuantity((previousState) => previousState + 1);
  };

  return (
    <div className="flex gap-5">
      <Button onClick={decreaseQuantity}>➖</Button>
      <input
        type="number"
        id="quantity"
        value={quantity}
        onChange={quantity}
        className="h-10 w-16 text-black border-transparent bg-transparent text-center"
      />
      <Button onClick={increaseQuantity}>➕</Button>
    </div>
  );
}
