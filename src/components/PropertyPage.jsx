import React from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'
import propertyData from '../content'
const PropertyPage = () => {
    const { id} =useParams()
    const property = propertyData.find((item)=>item.id.toString()===id)
    console.log (property)
    if(!property){
        return<div>Property not found</div>
    }
  return (
    <div className="container">
    <div className="row">
      <div className="card-contain" style={{"height":"100vh", width:"100vw", display:"flex ", alignItems:"center", justifyContent:"center"}}>
       
        <Card 
            image={property.image}
            price_per_month={property.price_per_month}
            location={property.location}
            listing_type={property.listing_type}
            key={property.id}
            
            />
                
        
            
      </div>
    </div>
  </div>
  )
}

export default PropertyPage