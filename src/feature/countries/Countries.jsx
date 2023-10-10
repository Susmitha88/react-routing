import React from 'react'
import { useGetAllCountriesQuery } from '../../services/counters'
import { Outlet } from 'react-router-dom'

function Countries (){
     var{isLoading,data}=useGetAllCountriesQuery()
     console.log(isLoading)
    return (
        <div className='mybox'>
            <h2>Countries</h2>
            <div style={{display:'flex',flexWrap:"wrap"}}> <ul style={{width:"20%"}}>
                {
                    isLoading && <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Floading-satisfies--523895369144053655%2F&psig=AOvVaw2XF-4VAfEzYY8oBV67-4J1&ust=1696931096271000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNDe8o7X6IEDFQAAAAAdAAAAABAJ"></img>
                }
                {
                    data && data.map((country)=>{
                        return<li>
                            <Link to={'/countryDetails/${country.name.common}'}>{country.name.common}</Link>
                        </li>

                    })
                }
            </ul>
            <div style={{width:"70%"}}>
                <Outlet></Outlet>
            </div>
           
       </div>
       </div>
    )
}
export default Countries 
           
          