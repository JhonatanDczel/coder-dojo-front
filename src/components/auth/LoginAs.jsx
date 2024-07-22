import {FaBriefcase} from 'react-icons/fa'
import {PiNotebookFill} from 'react-icons/pi'

export default function LoginAs(){
  return <>
  <h3>Login as:</h3>
  <button> <FaBriefcase /> Profesor</button>
  <button> <PiNotebookFill /> Estudiante</button>
  </>
}