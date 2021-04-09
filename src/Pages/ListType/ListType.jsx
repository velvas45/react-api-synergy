import React, { useState, useEffect } from 'react'
import { useParams,useRouteMatch } from "react-router-dom"
import { ListGroup, ListGroupItem, Spinner } from 'reactstrap';


function ListType() {
    const params = useParams();
    let match = useRouteMatch();
    const urlSebelum = match.url.split('/')
    const [typeList, setTypeList] = useState(null)
    const [isLoading, setIsLoading] = useState(false);

    const baseUrl = `https://berita-indo-api.vercel.app/v1/${urlSebelum[1]}/${params.type}`

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
          {isLoading && (
              <>
              <div className="d-flex justify-content-center">
              <Spinner type="grow" color="primary" />
              <Spinner type="grow" color="primary" />
              <Spinner type="grow" color="primary" />
              <Spinner type="grow" color="primary" />
              <Spinner type="grow" color="primary" />
              </div>
              </>
          )}
          
            <ListGroup>
                {!isLoading && typeList && typeList.map((data, i) => (
                    <ListGroupItem key={i}>{data.title}</ListGroupItem>
                    ))}
            </ListGroup>
      </>
  
    )
}

export default ListType
