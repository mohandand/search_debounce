import React, {useState} from 'react';

export default function Search() {
    const[result, setResult] = useState([])

    function doSearch(event){
        const {value} = event.target;
        fetch(`https://demo.dataverse.org/api/search?q=${value}`)
        .then(res => res.json())
        .then(json => {
            set(json);
        })
    }

    function set(json){
        let arr =[];
        arr.push(json.data.items);
        setResult([...result,arr]);
    }
    return (
        <div className="container">
            <input type="text" placeholder="Type Something" onChange={doSearch}></input>
            <button>Search</button>
            <div>
                {result.map((item,i)=> {
                    return <div key={i}>{item[0][0].name}</div>
                })}
            </div>
        </div>
    )
}