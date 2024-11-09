

const Title = ({heading,para}) => {
  return (
    <div className='text-center'>
      <h2 className='text-5xl font-semibold py-5'>{heading}</h2>
      <p className='text-2xl py-4'>{para}</p>
    </div>
  )
}

export default Title