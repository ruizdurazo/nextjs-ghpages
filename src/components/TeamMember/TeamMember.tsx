import React, { useState } from 'react'

// import { motion } from 'framer-motion'

import IconPlus from '../../assets/plus.svg'

import styles from './TeamMember.module.scss'

import { Image } from '@/components/Image'

import { parseParagraph } from '@/utils/parseTexts'

interface TeamMemberProps {
  member: TeamMember
  index: number
}

export const TeamMember = ({ member, index }: TeamMemberProps) => {
  //
  // State
  //

  const [isSummaryTextOpen, setIsSummaryTextOpen] = useState(false)
  const [i] = useState(index + 1)

  //
  // Methods
  //

  const onClickOpenText = () => {
    setIsSummaryTextOpen(!isSummaryTextOpen)
  }

  //
  // Template
  //

  return (
    <>
      {/* Team members */}
      <div className={`${styles['team-member']}`}>
        <div className={`${styles['image']}`}>
          {/* <motion.div
            //
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
          > */}
          <Image
            src={`/images/team/${i}.jpg`}
            placeholder={`team/${i}.jpg`}
            // placeholder={`/images/team/${i}.jpg?lqip`}
            alt=""
            width={340}
            height={420}
          />
          {/* </motion.div> */}
        </div>

        {/*  */}
        <div className={`${styles['details']} ${isSummaryTextOpen && styles['details--open']}`}>
          {/*  */}

          {/* <div className={`${styles['main']}`}> */}
          {/*  */}

          {/*  */}
          <div className={`${styles['name-job']}`}>
            {member.name && (
              //
              <div className={`${styles['name']}`}>{member.name}</div>
            )}
            {member.job && (
              //
              <div className={`${styles['job']}`}>{member.job}</div>
            )}
          </div>

          {/* Summary text */}
          {member.summary.length > 0 && (
            <div className={`${styles['summary']}`}>
              {member.summary.map((text: string, index) => {
                return <p key={index} dangerouslySetInnerHTML={{ __html: parseParagraph(text) }} />
              })}
            </div>
          )}
        </div>

        {/* Button */}
        {member.summary.length > 0 && (
          //
          <button
            className={`${styles['button']} ${isSummaryTextOpen && styles['button--open']}`}
            onClick={() => onClickOpenText()}
          >
            <IconPlus />
          </button>
        )}
        {/* </div> */}
      </div>
    </>
  )
}
