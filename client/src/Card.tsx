import { FC } from 'react'

export const Card: FC<{
  image: string,
  text: string
}> = ({ image, text }) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='card-title'>
          <img src={image} alt="Icon" />
        </div>
        <div>{text}</div>
      </div>
    </div>
  )
}
