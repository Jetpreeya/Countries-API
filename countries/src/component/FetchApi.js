import React ,{ useState}from "react";

function FetchAPI () {
    const [data, setData] = useState([]);

    const apiGet = () =>{
        fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
    };

    return(
        <div>
            <button onClick ={apiGet}>Click</button>
            <br></br>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>

    );
}

export default FetchAPI;