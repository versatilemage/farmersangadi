import Link from "next/link";
import { varietyOfButtons } from "@/utils/condition";
import AllCategoryListed from "@/components/Molecules/categoryListed"

const ListingOfProducts = () => {
  return (
    <section className="flex flex-col items-center gap-6">
      <h1 className="text-primary capitalize text-6xl font-semibold">{`Fresh Product's Daily`}</h1>
      <p className="text-primary text-[18px] text-center w-4/6">
        On the other hand we denounce with righteous indignation and dislike men
        who are so beguiled and demoralized by the charms of
      </p>
      <div className="flex flex-row items-center justify-between w-4/6">
        {varietyOfButtons.map((i) => (
          <Link
            className="border-[1px] p-3 border-secondary rounded-sm duration-300 hover:text-tertiary hover:bg-secondary"
            key={i.text}
            href={i.link}
          >
            {i.text}
          </Link>
        ))}
      </div>
      <AllCategoryListed/>
    </section>
  );
};

export default ListingOfProducts;
