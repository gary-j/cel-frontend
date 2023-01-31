type Props = {
	className?: string
}

const Resources = ({ className }: Props) => (
	<div
		className={`${className} m-0 flex h-fit w-full cursor-pointer items-center justify-center bg-blue-stone-900 py-0 px-7 text-center text-resources uppercase leading-6 text-white underline decoration-2 underline-offset-8 tablet:px-5 laptop:mt-7 laptop:bg-porcelain-50 laptop:text-persian-green-600 laptop:grid-in-resources`}
	>
		<span data-mdb-ripple='true' data-mdb-ripple-color='dark'>
			autres ressources
		</span>
	</div>
)

export default Resources
