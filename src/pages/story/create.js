import React, { useContext } from 'react'
import { AuthContext } from '../../../context/auth.context'
import CreateStoryFormContainer from '../../components/stories/createStoryForm/CreateStoryFormContainer'

function Create() {
	const { user } = useContext(AuthContext)
	console.log('user du context : ', user)
	return (
		<>
			{/* <div className={styles.create}>create</div>; */}
			<CreateStoryFormContainer user={user}></CreateStoryFormContainer>
		</>
	)
}

export default Create
