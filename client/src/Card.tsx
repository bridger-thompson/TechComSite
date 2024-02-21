import { FC } from 'react'

export const Card: FC<{
  image: string,
  text: string,
  url?: string,
}> = ({ image, text, url }) => {
  if (url) return (
    <a href={url} target='_blank' rel="noreferrer"
      className='text-reset text-decoration-none list-group'>
      <div className='card shadow-sm list-group-item list-group-item-action'>
        <div className='card-body'>
          <div className='card-title'>
            <img src={image} alt="Icon" />
          </div>
          <div>{text}</div>
        </div>
      </div>
    </a>
  )
  return (
    <div className='card shadow-sm'>
      <div className='card-body'>
        <div className='card-title'>
          <img src={image} alt="Icon" />
        </div>
        <div>{text}</div>
      </div>
    </div>
  )
}
