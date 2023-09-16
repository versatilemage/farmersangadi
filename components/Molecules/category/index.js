import MiniProductcard from "@/components/Atoms/miniProductCard"
import { storeDisplay } from "@/utils/mockJson";

const SeparateCategory = ({params}) => {
    const identifier = storeDisplay[`${params.category}`]
    return (
        <div className="w-screen h-max flex flex-col items-center justify-center">
            <div className="w-full max-w-[1400px] grid grid-cols-3 gap-12 py-12">
            {identifier.products.map((i) => {
                return (
                    <MiniProductcard data={i} uniqueIdentifier={identifier.title} key={i.name}/>
                )
            })}
            </div>
        </div>
    )
}

export default SeparateCategory;
