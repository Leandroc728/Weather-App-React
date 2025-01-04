import React from 'react'

type Props = {}

// A simple footer component

const Footer : React.FC<Props> = (props) => {
  return (
    <div className='flex relative bottom-0 left-0 right-0 bg-slate-900 py-2 justify-center items-center'>
        <p>Made by Leandro</p>
    </div>
  )
}

export default Footer