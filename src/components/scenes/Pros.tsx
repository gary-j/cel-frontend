type Props = {
	className?: string
}

const Pros = ({ className }: Props) => (
	<div
		className={`${className} m-0 flex w-full flex-col bg-blue-stone-900 px-7 py-0 tablet:px-5 laptop:justify-between laptop:bg-porcelain-50 laptop:px-0 laptop:grid-in-pros`}
	>
		<button
			className='btn-carnation btn mb-6 laptop:mb-0 laptop:min-w-[300px]'
			data-mdb-ripple='true'
			data-mdb-ripple-color='dark'
			type='button'
		>
			<>
				<span>trouver un professionnel</span>
				<div className='text-buttonSubtitle normal-case'>
					ou une association
				</div>
			</>
		</button>

		<button
			className='btn-outline-on-blue-stone laptop:btn-outline-on-porcelain btn'
			data-mdb-ripple='true'
			data-mdb-ripple-color='light laptop:dark'
			type='button'
		>
			<>
				<span>espace pro</span>
				<div className='text-buttonSubtitle normal-case'>
					(médecins, psychologues, avocats…)
				</div>
			</>
		</button>
	</div>
)

export default Pros
