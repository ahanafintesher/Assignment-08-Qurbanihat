import { getData } from "@/lib/getData";
import AnimalCard from "./AnimalCard";
import FilterSection from "./FilterSection";

const AllAnimalsPage = async () => {
    const datas = await getData();
   
    
    return (
       <div className="container mx-auto py-6 space-y-4 ">
         <div>
            <h1 className="text-3xl font-bold text-green-800">All Animals</h1>
         </div>

         <div>
            <FilterSection datas={datas}></FilterSection>
         </div>
         
         <div className="grid grid-cols-3 gap-8">
            {
                datas.map(data => <AnimalCard key={data.id} data={data}></AnimalCard>)
            }
         </div>
       </div>
    );
};

export default AllAnimalsPage;