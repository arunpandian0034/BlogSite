import axios from 'axios';
import React, { useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Bookcardadd = () => {
    const {id} = useParams ();
    const [card,setCard] = useState({title:'',images:[],author:'',amt:''});

    const [error,setError] = useState()

    useEffect (()=>{
        const fetchData = async() =>{
            try {
                const res = await axios.get("http://localhost:4008/product/list");
                console.log(res.data);
    
                const product = res.data.find(item =>item._id === id);
                if (product) {
                    setCard(product)
                } else {
                    setError("product not found")
                }
                
                
            } catch (error) {
                console.log('Error fetching data',err);
                setError('Error fetching data');
             
            }
         
        }
        fetchData ();
    },[id]); 

  return (
    <>
    <div>
        <h1>{card.title}</h1>
        <h4></h4>
    </div>
    <div>
        {card.images.slice(0,2).map((index,image)=>{
            <div key={index}>
                <img src={`http://localhost:4008/Assets/${image}`} alt= {`images${index+1}`} srcset="" />

            </div>
        })}
    </div>


    </>
  )
}

export default Bookcardadd
