import React, { useEffect, useRef, useState } from 'react'

import styles from './Image.module.scss'

interface ImageProps {
  src: string
  placeholder?: string
  width?: number
  height?: number
  alt: string
}

export const Image = ({ src, placeholder, width, height, alt = '' }: ImageProps) => {
  //
  // State
  //

  const [isImageLoaded, setIsImageLoaded] = useState(false)

  //
  // Refs
  //

  const image = useRef<HTMLImageElement>() as React.MutableRefObject<HTMLImageElement>

  //
  // useEffects
  //

  useEffect(() => {
    if (image.current?.complete) setIsImageLoaded(true)
  }, [])

  const handleLoad = () => {
    setIsImageLoaded(true)
  }

  //
  // Template
  //

  return (
    <>
      {/* Content */}
      <div className={styles.container}>
        {/* Placeholder image */}
        {placeholder && (
          <img
            src={`${require(`public/images/${placeholder}?lqip`)}`}
            // src={`${require(`public/images/gallery/${placeholder}?lqip`)}`} // 'public/images/gallery/' in component
            // src={`${require('public/images/gallery/image00001.jpeg?lqip')}`}
            // src={`${require('../../../public/images/gallery/image00001.jpeg?lqip')}`}
            // src={`${require(placeholder)}`}
            // src={`${require(`../../../${placeholder}?lqip`)}`}
            // src={placeholder}
            // src={`${placeholder}`}
            // src={dynamic(() => import('./path/to/about'))}
            // src={require(`.${placeholder}`)}
            // src={`${require(placeholder)}`}
            // src={`${require(placeholder)}?lqip`}
            // width={1200}
            // height={800}
            width={width ? width : undefined}
            height={height ? height : undefined}
            alt={alt}
            style={isImageLoaded ? { display: 'none' } : { position: 'relative' }}
            className={styles.placeholder}
          />
        )}

        {/* Final image */}
        <img
          onLoad={handleLoad}
          ref={image}
          src={`${
            process.env.NEXT_PUBLIC_BASE_PATH ? process.env.NEXT_PUBLIC_BASE_PATH : ''
          }${src}`}
          width={width ? width : undefined}
          height={height ? height : undefined}
          alt={alt}
          style={isImageLoaded ? { position: 'relative' } : { display: 'none' }}
          // loading= "lazy"
          className={styles.image}
        />
      </div>
    </>
  )
}
