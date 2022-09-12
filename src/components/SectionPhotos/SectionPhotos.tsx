import React, { useEffect, useRef, useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'
import { wrap } from 'popmotion'

import { Image } from '@/components/Image'

import IconNext from '../../assets/arrow-right.svg'
import IconBack from '../../assets/arrow-left.svg'

import sharedStyles from '@/styles/Shared.module.scss'
import styles from './SectionPhotos.module.scss'

import { parseTitle } from '@/utils/parseTexts'

interface SectionPhotosProps {
  t: TranslationWithImages
}

export const SectionPhotos = ({ t }: SectionPhotosProps) => {
  //
  // State
  //

  const [[page, direction], setPage] = useState([0, 0])

  //
  // motion, images
  //

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      }
    },
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const imageIndex = wrap(0, t.images.photosAndVideos.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  //
  // Methods
  //

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      // left, back
      refButtonBack.current.click()
    } else if (event.key === 'ArrowRight') {
      // right, next
      refButtonNext.current.click()
    }
  }

  //
  // Refs
  //

  const refButtonBack = useRef<HTMLButtonElement>(null) as React.MutableRefObject<HTMLButtonElement>
  const refButtonNext = useRef<HTMLButtonElement>(null) as React.MutableRefObject<HTMLButtonElement>

  //
  // useEffects
  //

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [])

  //
  // Template
  //

  return (
    <>
      {/* Section */}
      <section id="photos" className={`${sharedStyles['section']} ${styles['photos']}`}>
        {/* Title */}
        <h2 dangerouslySetInnerHTML={{ __html: parseTitle(t.photos.title) }} />

        {/* Gallery */}
        <div className={styles['images']}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
              className={styles['image']}
            >
              {/* If Image file */}
              {!t.images.photosAndVideos[imageIndex].endsWith('.mp4') &&
                !t.images.photosAndVideos[imageIndex].startsWith(
                  'https://www.youtube.com/embed'
                ) && (
                  <Image
                    src={`/images/gallery/${t.images.photosAndVideos[imageIndex]}`}
                    placeholder={`gallery/${t.images.photosAndVideos[imageIndex]}`}
                    alt=""
                  />
                )}

              {/* If Video file */}
              {t.images.photosAndVideos[imageIndex].endsWith('.mp4') && (
                <video controls>
                  <source
                    src={`/videos/gallery/${t.images.photosAndVideos[imageIndex]}`}
                    type="video/mp4"
                  />
                  Your browser doesn't support HTML5 video tag.
                </video>
              )}

              {/* If YouTube Video */}
              {t.images.photosAndVideos[imageIndex].startsWith('https://www.youtube.com/embed') && (
                <iframe
                  id="ytplayer"
                  // width="640"
                  // height="360"
                  src={`${t.images.photosAndVideos[imageIndex]}?autoplay=0&modestbranding=1`}
                ></iframe>
              )}
            </motion.div>
            {/* <motion.img
              key={page}
              src={`/images/gallery/${t.images.photosAndVideos[imageIndex]}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
              className={styles['image']}
            /> */}
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className={styles['controls']}>
          <button
            type="button"
            ref={refButtonBack}
            className={styles['back']}
            onClick={() => {
              paginate(-1)
            }}
          >
            <IconBack />
          </button>
          <div className={styles['count']}>
            <span>{('0' + (imageIndex + 1)).slice(-2)}</span>
            <span className={styles['slash']}>/</span>
            <span>{('0' + t.images.photosAndVideos.length).slice(-2)}</span>
          </div>
          <button
            type="button"
            ref={refButtonNext}
            className={styles['next']}
            onClick={() => {
              paginate(1)
            }}
          >
            <IconNext />
          </button>
        </div>
      </section>
    </>
  )
}
