import CustomerCard from "../../Layout/CustomerCard/CustomerCard";

export default function CustomerReviews (){
    return(
        <div className="padding flex w-full flex-col items-center justify-center max-container bg-[#FAF3EC]">
         <h2 className="text-anon-dark font-melodrama text-5xl">Customer Reviews</h2>
         <CustomerCard />
        </div>
    )
}