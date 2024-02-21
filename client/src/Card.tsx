import { FC } from 'react'

export const Card: FC<{
  image: string,
  text: string,
  url?: string,
}> = ({ image, text, url }) => {
  if (url) return (
    <a href={url} target='_blank' rel="noreferrer"
      className='text-reset text-decoration-none my-1 bg-hover'>
      <div className='card shadow bg-dark text-white border-black h-100'>
        <div className='card-body px-0 text-center'>
          <div className='card-title'>
            <img src={image} className='img-fluid rounded-4' alt="Icon"
              style={{ maxHeight: "8ex" }} />
          </div>
          <div>{text}</div>
        </div>
      </div>
    </a>
  )
  return (
    <div className='card shadow my-1 bg-transparent border-black bg-hover h-100'>
      <div className='card-body px-0'>
        <div className='card-title'>
          <img src={image} alt="Icon" />
        </div>
        <div>{text}</div>
      </div>
    </div>
  )
}
