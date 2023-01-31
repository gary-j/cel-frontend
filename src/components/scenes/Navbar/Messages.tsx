import IconMessages from '@assets/icons/messages/icon-messages.svg'
type Props = {}

const Messages = (props: Props) => {
	return (
		<div className='m-0 w-full bg-blue-stone-900 px-7 py-0 tablet:px-5 laptop:px-7'>
			<button
				className='btn-persian-green group btn inline-flex items-center justify-between px-3'
				data-mdb-ripple='true'
				data-mdb-ripple-color='light'
				type='button'
			>
				<IconMessages className='mr-3 h-6 w-6 text-white' />
				<div className='w-full text-left'>Messagerie</div>
				<div className='inline-flex h-6 w-6 items-center justify-center rounded-full bg-carnation-400 p-3 text-xs font-medium leading-none text-white group-hover:bg-carnation-500'>
					2
				</div>
			</button>
		</div>
	)
}

export default Messages
