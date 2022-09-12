import React from 'react'

import sharedStyles from '@/styles/Shared.module.scss'
import styles from './SectionTeam.module.scss'

import { parseTitle } from '@/utils/parseTexts'

import { TeamMember } from '../TeamMember'

interface SectionTeamProps {
  t: Translation
}

export const SectionTeam = ({ t }: SectionTeamProps) => {
  //
  // Template
  //

  return (
    <>
      {/* Section */}
      <section id="team" className={`${sharedStyles['section']} ${styles['team']}`}>
        {/* Title */}
        <h2 dangerouslySetInnerHTML={{ __html: parseTitle(t.team.title) }} />

        {/* Container */}
        <div className={`${styles['container']}`}>
          {/* Team members */}
          {t.team.teamMembers.map((member: TeamMember, index) => {
            return <TeamMember key={index} member={member} index={index} />
          })}
        </div>
      </section>
    </>
  )
}
