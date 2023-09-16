import { sampleProductsList } from "@/utils/condition";
import { storeDisplay } from "@/utils/mockJson";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import MiniProductcard from "@/components/Atoms/miniProductCard"

const AllCategoryListed = () => {
  return (
    <>
      {sampleProductsList.map((i) => {
        const uniqueIdentifier = storeDisplay[`${i.identifier}`]
        return (
          <div key={i.identifier} className="flex flex-col mt-12 gap-10">
            <h1 className="text-2xl font-bold capitalize text-primary">
              {i.title}
            </h1>
            <div className="flex flex-row items-center h-max gap-8 w-full max-w-[1400px] overflow-scroll px-2 py-6">
              {uniqueIdentifier.products.slice(0, 4).map((j) => {
                return (
                  <MiniProductcard data={j} uniqueIdentifier={i.title} key={j.name}/>
                );
              })}
            </div>
            <Link
              href={`/products/${i.identifier}`}
              className="py-3 px-6 bg-tertiary w-max self-end flex items-center gap-4 hover:bg-primary hover:text-tertiary duration-300 border-[1px] border-secondary hover:border-primary"
            >
              <p>View More</p>
              <BiRightArrowAlt className="text-xl" />
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default AllCategoryListed;
