import React from 'react'

import Property from '../components/Property'
import PropertyBanner from '../components/PropertyBanner'

const properties = () => {
  const contacts = [];

  for (let i = 0; i < 10; i++) {
    contacts.push({
      img_src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      files: "",
      file_number: i,
      apn: "",
      legal_description: "",
      lot_size_sqft: "56000",
      lot_size_acres: "",
      property_address: "P.O. Box 143, 1317 Pede. Street",
      property_city: "Bengkulu",
      property_state: "Castile-La Mancha",
      property_zip: "52006",
      property_country: "Spain",
      last_sale_amount: "",
      last_sale_recording_date: "",
      cad_value: "",
      seller_asking_price: "7459999",
      mao: "",
      seller_contracted_price: "",
      prs_emd: "",
      prs_contract_signed_date: "",
      prs_dd_days: "",
      prs_dd_end_date: "",
      prs_contract_days: "",
      prs_contract_end_date: "",
      prs_asking_price: "",
      buyer_contracted_price: "",
      buyer_contract_signed_date: "",
      buyer_emd: "",
      buyer_dd_days: "",
      buyer_dd_end_date: "",
      buyer_contract_days: "",
      buyer_contract_end_date: "",
      buyer_1_full_name: "",
      buyer_1_phone: "",
      buyer_1_email: "",
      buyer_1_mailing_address: "",
      buyer_2_full_name: "",
      buyer_2_phone: "",
      buyer_2_email: "",
      buyer_2_mailing_address: "",
      realtor_county: "",
      dispo_checklist: "",
      first_name: "Charlotte",
      last_name: "Carrillo",
      email: "nibh.enim.gravida@outlook.edu",
      phone: "1-669-474-3262",
      company_name: "",
      address1: "",
      city: "",
      state: "",
      postal_code: "",
      type: ""
    })
  }

  return (
    <div>
      <PropertyBanner />

      <div className='container-fluid'>
        <div className='row d-flex justify-content-center'>
          {
            contacts.map(contact => {
              return <Property contact={contact} key={contact.file_number} />
            })
          }
        </div>
      </div>
    </div>
  )
}

export default properties