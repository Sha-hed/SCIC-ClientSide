import { useQuery } from "@tanstack/react-query";
import useAxiosGeneral from '../../hooks/useAxiosGeneral'
import CatCard from "../../components/CatCard";

const Home2 = () => {

    const axiosGeneral = useAxiosGeneral()
    const { data:categories=[] } = useQuery({
        queryKey: ['cateData'],
        queryFn: async () => {
            const { data } = await axiosGeneral.get('/getHomePageProduct')
            return data;
        }
    })

    // console.log('Data coming Check ',categories)

    return (
        <div>
            <div className="">
                {
                    categories?.map((data,id)=><CatCard key={id} data={data}></CatCard>)
                }
            </div>
        </div>
    );
};

export default Home2;