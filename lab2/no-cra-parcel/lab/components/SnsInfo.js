import React from 'react'
import Button from './Button'

const SnsInfo = () => {
  const snsNames = [
    'Instagram',
    'Facebook',
    'Twitter',
    'LinkedIn',
    'YouTube',
    'Github',
  ]
  return (
    <section>
      <div className='wrapper'>
        {snsNames.map((snsName) => {
          <Button snsName={snsName}/>
        })}
      </div>
    </section>
  )
}

export default SnsInfo