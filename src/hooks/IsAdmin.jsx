import { useQuery } from "@tanstack/react-query";
import useAxiosGeneral from '../hooks/useAxiosGeneral.jsx'
import { useContext } from "react";
import { AuthContext } from "../route/AuthProvider";

const IsAdmin = () => {
    const { user,loading }  = useContext(AuthContext)
    const axiosGeneral = useAxiosGeneral()

    const { data:isAdmin } = useQuery({
       queryKey: ['admin'],
       enabled: !loading,
       queryFn: async()=>{
        const { data } = await axiosGeneral.get(`/adminCheck/${user?.email}`)
        return data.IsAdmin;
       }
    })

    return [isAdmin]
};

export default IsAdmin;