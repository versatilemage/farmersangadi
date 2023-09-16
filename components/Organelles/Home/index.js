import LandingHeader from "@/components/Molecules/Header";
import UserRoleCard from "@/components/Molecules/UserCard";
import ListingOfProducts from "@/components/Molecules/ProductsListing";
// import dynamic from "next/dynamic";

const LandingHomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-24 w-full mb-12">
            <LandingHeader/>
            <UserRoleCard/>
            <ListingOfProducts/>
        </div>
    )
}

export default LandingHomePage;
