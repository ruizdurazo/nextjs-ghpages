// import React, { useEffect, useState } from 'react'
import React, { useEffect, useRef, useState } from 'react'

import styles from './Image.module.scss'

interface ImageProps {
  src: string
  placeholder: string
  width: number
  height: number
  alt: string | ''
}

export const Image = ({ src, placeholder, width, height, alt }: ImageProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  // console.log(src)
  // const image = useRef() as
  // const image = React.createRef<HTMLImageElement>()
  const image = useRef<HTMLImageElement>() as React.MutableRefObject<HTMLImageElement>

  useEffect(() => {
    // image.addEventListener('load', handleBackDropClick)
    // console.log(image)

    if (image.current?.complete) setIsImageLoaded(true)
  }, [])

  const handleLoad = () => {
    // console.log('boop')

    setIsImageLoaded(true)
  }

  return (
    <>
      {/* Content */}
      <div
        className={styles.test}
        // style={{ backgroundImage: `url(${src}?lqip)` }}
        // style={isImageLoaded ? { backgroundImage: `url(${src}?lqip)` } : {}}
      >
        {/* Placeholder image */}
        {/* // src={`${src}?lqip`} */}
        {/* src={require(`${src}?lqip`)} */}
        <img
          src={placeholder}
          width={width}
          height={height}
          alt={alt}
          style={isImageLoaded ? { display: 'none' } : {}}
          className={styles.placeholder}
        />
        {/* Final image */}
        {/* // src={src} */}
        {/* src={require(`${src}`)} */}
        <img
          onLoad={handleLoad}
          ref={image}
          // onLoad={() => {

          //   setIsImageLoaded(true)
          // }}
          src={src}
          width={width}
          height={height}
          alt={alt}
          style={isImageLoaded ? {} : { display: 'none' }}
          // loading="lazy"
        />
      </div>
    </>
  )
}

// import LazyLoad from "react-lazyload";

// const WebImage = props => {
//   return (
//     <LazyLoad
//       once
//       placeholder={
//         <img
//           src={require(`../static/${props.src}?lqip`)}
//           className={props.className}
//         />
//       }
//     >
//       <picture className={props.className}>
//         <source
//           srcset={require(`../static/${props.src}?webp`)}
//           type="image/webp"
//         />
//         <source
//           srcset={require(`../static/${props.src}`)}
//           type={props.mimeType}
//         />
//         <img
//           src={require(`../static/${props.src}`)}
//           alt={props.alt}
//           className={props.className}
//         />
//       </picture>
//     </LazyLoad>
//   );
// };

// export default WebImage;
