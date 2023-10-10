import React from 'react'
import { useGetCountryDetailsByNameQuery } from '../../services/counters'

function CountryDetails(){
    var {cname}=useParams()
     var {data,isLoading}=useGetCountryDetailsByNameQuery(cname)
         
    return(
        <div className='mybox'>
            <h1>CountryDetails of{cname}</h1>
            {
                data && <img src={data[0].flag[0]}alt=""width="200px"/>
            }
        </div>
    )
}
export default CountryDetalis