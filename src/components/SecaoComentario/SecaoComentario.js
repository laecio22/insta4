import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
          comentarioInput: ""
	}

	onChangeComentario = (event) => {
		
		
		 
		 this.setState({
			 comentarioInput:  event.target.value
		 })         
		
	}

	adicionaComentario = () =>{
		
		this.props.aoEnviar(this.state.comentarioInput)
		


		
	}

	
	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.comentarioInput}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.adicionaComentario} >Enviar</button>
		</div>
	}
}
