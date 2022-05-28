import React from 'react'

const PropertyBanner = () => {
  return (
    <div className='property-banner' style={{position: 'relative'}}>
      <svg style={{
        position: 'absolute',
        right: 0
      }} width="50vw" height="100%" viewBox="0 0 107 106" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#fff2" d="M55.6 5.05C54.45 6.2 52.59 6.2 51.44 5.05C50.29 3.9 50.29 2.04 51.44 0.889996C52.59 -0.260004 54.45 -0.260004 55.6 0.889996C56.75 2.04 56.75 3.9 55.6 5.05ZM68.04 13.33C66.89 12.18 65.03 12.18 63.88 13.33C62.73 14.48 62.73 16.34 63.88 17.49C65.03 18.64 66.89 18.64 68.04 17.49C69.19 16.34 69.19 14.48 68.04 13.33ZM80.48 25.77C79.33 24.62 77.47 24.62 76.32 25.77C75.17 26.92 75.17 28.78 76.32 29.93C77.47 31.08 79.33 31.08 80.48 29.93C81.63 28.78 81.63 26.92 80.48 25.77ZM92.92 38.21C91.77 37.06 89.91 37.06 88.76 38.21C87.61 39.36 87.61 41.22 88.76 42.37C89.91 43.52 91.77 43.52 92.92 42.37C94.07 41.22 94.07 39.36 92.92 38.21ZM105.36 50.65C104.21 49.5 102.35 49.5 101.2 50.65C100.05 51.8 100.05 53.66 101.2 54.81C102.35 55.96 104.21 55.96 105.36 54.81C106.5 53.66 106.5 51.8 105.36 50.65ZM43.16 13.33C42.01 12.18 40.15 12.18 39 13.33C37.85 14.48 37.85 16.34 39 17.49C40.15 18.64 42.01 18.64 43.16 17.49C44.31 16.34 44.31 14.48 43.16 13.33ZM55.6 25.77C54.45 24.62 52.59 24.62 51.44 25.77C50.29 26.92 50.29 28.78 51.44 29.93C52.59 31.08 54.45 31.08 55.6 29.93C56.75 28.78 56.75 26.92 55.6 25.77ZM68.04 38.21C66.89 37.06 65.03 37.06 63.88 38.21C62.73 39.36 62.73 41.22 63.88 42.37C65.03 43.52 66.89 43.52 68.04 42.37C69.19 41.22 69.19 39.36 68.04 38.21ZM80.48 50.65C79.33 49.5 77.47 49.5 76.32 50.65C75.17 51.8 75.17 53.66 76.32 54.81C77.47 55.96 79.33 55.96 80.48 54.81C81.63 53.66 81.63 51.8 80.48 50.65ZM92.92 63.09C91.77 61.94 89.91 61.94 88.76 63.09C87.61 64.24 87.61 66.1 88.76 67.25C89.91 68.4 91.77 68.4 92.92 67.25C94.07 66.1 94.07 64.24 92.92 63.09ZM30.72 25.77C29.57 24.62 27.71 24.62 26.56 25.77C25.41 26.92 25.41 28.78 26.56 29.93C27.71 31.08 29.57 31.08 30.72 29.93C31.87 28.78 31.87 26.92 30.72 25.77ZM43.16 38.21C42.01 37.06 40.15 37.06 39 38.21C37.85 39.36 37.85 41.22 39 42.37C40.15 43.52 42.01 43.52 43.16 42.37C44.31 41.22 44.31 39.36 43.16 38.21ZM55.6 50.65C54.45 49.5 52.59 49.5 51.44 50.65C50.29 51.8 50.29 53.66 51.44 54.81C52.59 55.96 54.45 55.96 55.6 54.81C56.75 53.66 56.75 51.8 55.6 50.65ZM68.04 63.09C66.89 61.94 65.03 61.94 63.88 63.09C62.73 64.24 62.73 66.1 63.88 67.25C65.03 68.4 66.89 68.4 68.04 67.25C69.19 66.1 69.19 64.24 68.04 63.09ZM80.48 75.53C79.33 74.38 77.47 74.38 76.32 75.53C75.17 76.68 75.17 78.54 76.32 79.69C77.47 80.84 79.33 80.84 80.48 79.69C81.63 78.54 81.63 76.67 80.48 75.53ZM18.28 38.21C17.13 37.06 15.27 37.06 14.12 38.21C12.97 39.36 12.97 41.22 14.12 42.37C15.27 43.52 17.13 43.52 18.28 42.37C19.43 41.22 19.43 39.36 18.28 38.21ZM30.72 50.65C29.57 49.5 27.71 49.5 26.56 50.65C25.41 51.8 25.41 53.66 26.56 54.81C27.71 55.96 29.57 55.96 30.72 54.81C31.87 53.66 31.87 51.8 30.72 50.65ZM43.16 63.09C42.01 61.94 40.15 61.94 39 63.09C37.85 64.24 37.85 66.1 39 67.25C40.15 68.4 42.01 68.4 43.16 67.25C44.31 66.1 44.31 64.24 43.16 63.09ZM55.6 75.53C54.45 74.38 52.59 74.38 51.44 75.53C50.29 76.68 50.29 78.54 51.44 79.69C52.59 80.84 54.45 80.84 55.6 79.69C56.75 78.54 56.75 76.67 55.6 75.53ZM68.04 87.97C66.89 86.82 65.03 86.82 63.88 87.97C62.73 89.12 62.73 90.98 63.88 92.13C65.03 93.28 66.89 93.28 68.04 92.13C69.19 90.98 69.19 89.11 68.04 87.97ZM5.84 50.65C4.69 49.5 2.83 49.5 1.68 50.65C0.530005 51.8 0.530005 53.66 1.68 54.81C2.83 55.96 4.69 55.96 5.84 54.81C6.99 53.66 6.99 51.8 5.84 50.65ZM18.28 63.09C17.13 61.94 15.27 61.94 14.12 63.09C12.97 64.24 12.97 66.1 14.12 67.25C15.27 68.4 17.13 68.4 18.28 67.25C19.43 66.1 19.43 64.24 18.28 63.09ZM30.72 75.53C29.57 74.38 27.71 74.38 26.56 75.53C25.41 76.68 25.41 78.54 26.56 79.69C27.71 80.84 29.57 80.84 30.72 79.69C31.87 78.54 31.87 76.67 30.72 75.53ZM43.16 87.97C42.01 86.82 40.15 86.82 39 87.97C37.85 89.12 37.85 90.98 39 92.13C40.15 93.28 42.01 93.28 43.16 92.13C44.31 90.98 44.31 89.11 43.16 87.97ZM55.6 100.4C54.45 99.25 52.59 99.25 51.44 100.4C50.29 101.55 50.29 103.41 51.44 104.56C52.59 105.71 54.45 105.71 55.6 104.56C56.75 103.42 56.75 101.55 55.6 100.4Z" />
      </svg>

      <h1 className='property-banner-heading'>TOP RATED PROPERTIES</h1>
      <div className='property-banner-description'>Search houses and flats for sale across the globe</div>
    </div>
  )
}

export default PropertyBanner