import React from 'react'
import Gallery from 'react-photo-gallery'
import { photos } from '../assets/photos'


function GallerySection() {
  return (
    <>
        <Gallery photos={photos} margin='10' direction="column"/>
    </>
  )
}

export default GallerySection