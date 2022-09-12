import React, { useEffect, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import styles from './AnimatedText.module.scss'

interface AnimatedTextProps {
  words: string[]
}

export const AnimatedText = ({ words }: AnimatedTextProps) => {
  //
  // State
  //

  const [word, setWord] = useState(words[0])
  const [wordCounter, setWordCounter] = useState(0)
  const [boop, setBoop] = useState(false)
  const [letters, setLetters] = useState(Array.from(word))

  const container = {
    hidden: { opacity: 0 },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05 * 1,
      },
    }),
    exit: {
      opacity: 0,
    },
  }

  const containerChild = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    exit: {
      opacity: 0,
    },
  }

  //
  // Effects
  //

  //
  useEffect(() => {
    setLetters(Array.from(word))
  }, [word])

  //
  useEffect(() => {
    //
    setTimeout(() => {
      setBoop(true)
      //
      if (words.length <= 1) {
        return
      }

      //
      setTimeout(() => {
        setBoop(false)

        if (wordCounter >= words.length - 1) {
          setWord(words[0])
          setWordCounter(0)
        } else {
          setWord(words[wordCounter + 1])
          setWordCounter(wordCounter + 1)
          // console.log(word)
          // console.log(wordCounter)
        }
      }, 2950)
    }, 50)
  }, [word, wordCounter, words])

  //
  // Template
  //

  return (
    <AnimatePresence>
      <motion.div
        variants={container}
        initial="hidden"
        animate={boop ? 'visible' : 'exit'}
        exit="exit"
        className={styles['animate']}
      >
        {letters.map((letter, index) => (
          <span
            key={`${word}-${index}`}
            style={{
              display: 'inline-block',
            }}
          >
            <motion.span variants={containerChild} style={{ display: 'inline-block' }}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          </span>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
