import React from 'react'

const Property = ({ contact }) => {
  return (

    <div className="property-card card g-0 mx-3 my-3 border-0 col-lg-3 col-md-4">
      <img src={contact.img_src} className="card-img-top" alt="property" />

      <div>
        <div className='card-header'>
          <i className="fa-solid fa-tag"></i>
        </div>
        <div className="card-body">
          <h5 className="card-title">$ {contact.seller_asking_price}</h5>
        </div>
      </div>

      <div>
        <div className='card-header'>
          <i className="fa-solid fa-map-location-dot"></i>
        </div>
        <div className="card-body">
          <p className="card-text">
            {contact.property_address}<br />
            {contact.property_city}, {contact.property_state}<br />
            {contact.property_zip}, {contact.property_country}
          </p>
        </div>
      </div>

      <div>
        <div className='card-header'>
          <i className="fa-solid fa-address-card"></i>
        </div>
        <div className="card-body">
          <p className="card-text">
            {contact.first_name + " " + contact.last_name}<br />
            {contact.email}<br />
            {contact.phone}<br />
          </p>
        </div>
      </div>

      <a href="/" className="btn btn-primary m-3">Know More</a>

    </div>
  )
}

export default Property