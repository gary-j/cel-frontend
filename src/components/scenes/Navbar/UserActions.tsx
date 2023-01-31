type Props = {}

const UserActions = (props: Props) => {
	return (
		<div className='m-0 flex w-full flex-col gap-5 bg-blue-stone-900 px-7 py-0 tablet:px-5 laptop:px-7'>
			<button
				className='btn-carnation btn'
				data-mdb-ripple='true'
				data-mdb-ripple-color='dark'
				type='button'
			>
				Soumettre
			</button>
			<button
				className='btn-outline-on-blue-stone btn'
				data-mdb-ripple='true'
				data-mdb-ripple-color='light'
				type='button'
			>
				Modérer
			</button>
		</div>
	)
}

export default UserActions
