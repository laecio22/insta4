import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {Comentarios} from '../Comentarios/Comentarios'

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: true,
    numeroComentarios: 0,
    comentarios:[]
   
    
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    if (this.state.curtido){
       this.setState({
         numeroCurtidas: this.state.numeroCurtidas - 1
      })
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }
    this.setState({
      curtido: !this.state.curtido

    })

    
    
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })

    
  }

  aoEnviarComentario = (mensagem) => {
    const novoComentario = {
      texto : mensagem
    }

    const listaComentarios = [...this.state.comentarios, novoComentario]
   
    this.setState({
      comentando: !this.state.comentando,
      numeroComentarios: this.state.numeroComentarios + 1,
      comentarios: listaComentarios
    })

    
  }
  
  render() {
    
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
      
    } else {
      iconeCurtida = iconeCoracaoBranco
      
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </div>
      {componenteComentario}
      <Comentarios novosComentarios={this.state.comentarios}></Comentarios>
    </div>
  }
}

export default Post