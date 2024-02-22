import ImageComponent from '../Image'

const Title = (items) => {
    const props = {
        alternative: 'personal photo',
        visual: 'personal__userpic',
        link: '/aside/personal/lubenchenko_photo.jpg'
    }

	return (
		<div className='personal aside__personal aside--hr'>
			<div className='personal__image'>
				<ImageComponent value={props}/>
			</div>
			<div className='personal__heading'>
				<h1 className='personal__heading-title'>
					{items.values.firstName} {items.values.lastName}
				</h1>
				<div className='personal__heading-position'>
					{items.values.position}
				</div>
			</div>
			<div className='personal__quote'>
				<div className='personal__quote-text'>{items.values.quote}</div>
				<div className='personal__quote-author'>{items.values.quoteAuthor}</div>
			</div>
		</div>
	)
}

export default Title
