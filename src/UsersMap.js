import React, { useState, useEffect } from 'react';
import axios from 'axios';


function UsersMap() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://trefle.io/api/v1/plants?token=6qvfBc-op6KtII2D1_DeWiS87p7CCp1M5Blqe5naZEc')
            .then(res => console.log(res))



        // fetch('https://trefle.io/api/v1/plants?token=6qvfBc-op6KtII2D1_DeWiS87p7CCp1M5Blqe5naZEc')
        //     .then(response => response.json())
        //     .then(json => setData(json))
        // console.log("data", data)


        // var requestOptions = {
        //     method: 'GET',

        //     redirect: 'follow'
        // };

        // fetch("https://trefle.io/api/v1/plants?token=6qvfBc-op6KtII2D1_DeWiS87p7CCp1M5Blqe5naZEc", requestOptions)
        //     .then(response => response.json())
        //     .then(json => setData(json))
        // console.log("data", data)

    }, [])
    return (
        <div>
            <ol>
                {/* {data.map(item =>
                    <li key={item.common_name}>

                    </li>
                )} */}
            </ol>
        </div>

    )

}


export default UsersMap;