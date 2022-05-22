import React from "react";
import Post from "../components/Post/Post";
import FormularioPost from "../components/FormularioPost/FormularioPost";
import { AppContainer } from "./styled.js";
import { posts } from "../constants/stateMock";

class App extends React.Component {
  state = {
    posts: posts,
    valorInputNome: "",
    valorInputImagemAutor: "",
    valorInputImagemPost: "",
  };

  adicionarPost = (event) => {
    event.preventDefault();

    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputImagemAutor,
      fotoPost: this.state.valorInputImagemPost,
    };

    const listaAtualPosts = [novoPost, ...this.state.posts];

    this.setState({ posts: listaAtualPosts });
  };

  onChangeNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeFotoUsuario = (event) => {
    this.setState({ valorInputImagemAutor: event.target.value });
  };

  onChangeFotoPost = (event) => {
    this.setState({ valorInputImagemPost: event.target.value });
  };

  onClickDeletePost = (indexPost)=>{
   const newState =  this.state.posts
   newState.splice(indexPost, 1)
   this.setState({
     posts:newState
   })
    // console.log(indexPost)
 }


  render() {
    const listaPosts = this.state.posts.map((post, index) => {
      return (
        <Post
          key={index}
          deletePost = {this.onClickDeletePost}
          indexPost = {index}
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });

    return (
      <AppContainer>
        <FormularioPost
          inputNome={this.onChangeNome}
          inputFotoUser={this.onChangeFotoUsuario}
          inputFotoPost={this.onChangeFotoPost}
          addPost={this.adicionarPost}
        />

        {listaPosts}
      </AppContainer>
    );
  }
}

export default App;
