import Image from "next/image";

const MiniProductCard = ({ data, uniqueIdentifier }) => {
  return (
    <div
      className="w-96 max-h-[600px] rounded-lg shadow-[0_5px_25px_1px_rgba(0,0,0,0.3)] bg-tertiary relative h-max cursor-pointer"
    >
      <span className="absolute top-6 px-5 py-3 bg-red-600 text-tertiary rounded-r-full">
        {data.discount * 100} % OFF
      </span>
      <Image
        src={data.image}
        width={100}
        height={100}
        quality={100}
        alt={data.name}
        className="w-full h-full rounded-lg"
      />
      <div className="flex flex-col items-start gap-4 p-4 bg-secondary rounded-b-lg">
        <p className="text-primary text-sm font-medium">
          {uniqueIdentifier}
        </p>
        <p className="text-xl text-primary font-bold">
          ₹ {((data.discount / data.cost) * 10).toFixed(2)}
        </p>
        <p className="text-tertiary text-sm line-through"> ₹ {data.cost} </p>
        <p className="text-primary font-bold capitalize text-xl">{data.name}</p>
      </div>
    </div>
  );
};

export default MiniProductCard;
