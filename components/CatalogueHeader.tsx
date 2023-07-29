import React from 'react'
import CustomFilter from './CustomFilter'
import SearchBar from './SearchBar'

const CatalogueHeader = () => {
  return (
    <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
            <h1 className='text-4xl font-extrabold'>Catalogue</h1>
            <p className='italic'>Explore the cars you might like...</p>
        </div>

        <div className='home__filters'>
            <SearchBar />

            <div className='home__filter-container'>
                <CustomFilter title="fuel" />
                <CustomFilter title="year" />
            </div>
        </div>
    </div>
  )
}

export default CatalogueHeader