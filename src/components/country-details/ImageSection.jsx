import React from 'react'

const ImageSection = ({countryDetails}) => {
  return (
     <div className="image-section">
        <img
          src={countryDetails.flags.svg}
          alt={countryDetails.flags.alt || countryDetails.name.official}
        />
     </div>
  )
}

export default ImageSection