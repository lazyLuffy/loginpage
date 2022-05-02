import React, { useEffect, useState } from 'react'
import Pagination from '@material-ui/lab/Pagination';
import { axiosInstance, setAuthorizationHeader } from "./axios";
import { useSelector } from 'react-redux';
import MUIDataTable from "mui-datatables";


function UserData() {
    const {login_user} = useSelector(state=>state.user)
    const [data,setData] = useState()
    useEffect(()=>{
        setAuthorizationHeader();
        const token=localStorage.getItem('token')
        if(token){
            axiosInstance.post("/admin/user/fetch",{
                search: {
                    firstName:"",
                    lastName:"",
                    email: "",
                    password:"",
                    phoneNumber:""
                }
            }).then(res=>{
                console.log(res.data?.data)
                setData(res.data.data.allUsers)
            })
        }
        
    },[login_user])

    console.log(data,"data elemnt")
    
    const columns = ["firstName", "lastName", "email", "phoneNumber", ];
    const rData = data?.map(data=>([
        data?.firstName,
        data?.lastName,
        data?.email,
        data?.phoneNumber
    ]))
    const options = {
    filterType: 'checkbox',
};
    console.log(data,"array of data")
  return (
    <div className='user-data'>
        <h2>welcome in userData</h2>
        

<MUIDataTable
  title={"Employee List"}
  data={rData}
  columns={columns}
  options={options}
/>
    </div>
  )
}

export default UserData