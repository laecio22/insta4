import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components';

const FormularioPost = styled.div`
     width:400px;
     background-color: #777;
     border:1px solid #000;
     display:grid;
     justify-items:center;
     align-items:center;
     height:200px;
     margin-bottom:10px;
`

class App extends React.Component {
  state = {
    posts: [
        {
          
          nomeUsuario:'paulinha',
          fotoUsuario :'https://picsum.photos/id/1003/367/267',
          fotoPost:'https://picsum.photos/id/1011/367/267'
      },
      
      {
          
          nomeUsuario:'Carlos',
          fotoUsuario: 'https://picsum.photos/id/1023/367/267',
          fotoPost:'https://picsum.photos/id/1022/367/267'

      },

      {
          
          nomeUsuario:'Maria',
          fotoUsuario:'https://picsum.photos/id/1025/367/267',
          fotoPost:'https://picsum.photos/id/1021/367/267'
      }
    ] ,

    valorInputNome :"",
    valorInputImagemAutor :"",
    valorInputImagemPost :"",
  }

  adicionarPost = () => {
    
    // alert(this.state.valorInputNome)
    // alert(this.state.valorInputImagemAutor)
    // alert(this.state.valorInputImagemPost)

    const novoPost = {
      
      nomeUsuario : this.state.valorInputNome,
      fotoUsuario: this.state.valorInputImagemAutor,
      fotoPost:this.state.valorInputImagemPost
    }

    const listaAtualPosts = [novoPost , ...this.state.posts]

    this.setState({posts:listaAtualPosts})
    
     
  }

  onChangeNome  = (event) =>{
       this.setState({valorInputNome: event.target.value})
  }

  onChangeFotoUsuario  = (event) =>{
    this.setState({valorInputImagemAutor: event.target.value})
}

onChangeFotoPost  = (event) =>{
  this.setState({valorInputImagemPost: event.target.value})
}



  render() {
    

    const listaPosts = this.state.posts.map((post)=>{
         return ( <Post nomeUsuario = {post.nomeUsuario} fotoUsuario={post.fotoUsuario} fotoPost={post.fotoPost} >                   
                 </Post>

         );

         
    });

    return (

      <div className={'app-container'}>
          <FormularioPost>
            <input placeholder={'nome'} type="text" onChange ={this.onChangeNome}/>
            <input placeholder={'imagem'} type= "text" onChange ={this.onChangeFotoUsuario}/>
            <input placeholder={'foto post'} type={"text"} onChange ={this.onChangeFotoPost}/>
            <button onClick={this.adicionarPost}>Criar Novo Post</button>
          </FormularioPost>
          {listaPosts}
        
      </div>
    );
  }
}

export default App;
