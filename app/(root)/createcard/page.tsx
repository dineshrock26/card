import CreateCardForm from '@/components/shared/CreateCardForm'
import Header from '@/components/shared/Header'
import React from 'react'

const CreateCardType = () => {
  return (
    <div className='wrapper'>
        <Header/>
        <div className=''>
        <CreateCardForm/>
        </div>
    </div>
  )
}

export default CreateCardType