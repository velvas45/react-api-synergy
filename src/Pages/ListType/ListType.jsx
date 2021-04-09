import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { ListGroup, ListGroupItem } from 'reactstrap';


function ListType() {
    const params = useParams();
    const [typeList, setTypeList] = useState(null)
    const [isLoading, setIsLoading] = useState(false);

    const baseUrl = `https://berita-indo-api.vercel.app/v1/okezone-news/${params.type}`

    useEffect(() => {  
        getData(baseUrl)
      }, [baseUrl])

      const getData = (url) => {
        setIsLoading(true)
        fetch(url)
          .then(res => res.json())
          .then(res => {
            setTypeList(res.data)
            setIsLoading(false)
          })
          .catch(err => console.log(err))
      }
    
    

    return (
        <>
        <h4>Berita: {params.type}</h4>
          {isLoading && <p>Loading......</p>}
          
            <ListGroup>
                {!isLoading && typeList && typeList.map((data, i) => (
                    <ListGroupItem key={i}>{data.title}</ListGroupItem>
                    ))}
            </ListGroup>
      </>
  
    )
}

export default ListType
