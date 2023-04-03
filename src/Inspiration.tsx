import React from 'react'
import styled from 'styled-components'

const imageKeys = ['image1.jpg', 'image2.jpg', 'image3.jpg']
const images = imageKeys.map(
  (key) => require(`../public/img-grow/${key}`).default
)

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`

const Image = styled.img`
  width: 100%;
  height: auto;
`

type InspirationProps = {
  images: string[]
}

const Inspiration = ({ images }: InspirationProps) => {
  return (
    <ImageGrid>
      {images.map((image) => (
        <Image key={image} src={image} />
      ))}
    </ImageGrid>
  )
}

export default Inspiration
