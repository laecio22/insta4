import React from "react";
import './FormularioPost.css'

const FormularioPost = (props)=>{
 
    return(
        <form className="form">
            <input placeholder={'nome'} type="text" onChange ={props.inputNome}/>
            <input placeholder={'imagem'} type= "text" onChange ={props.inputFotoUser}/>
            <input placeholder={'foto post'} type={"text"} onChange ={props.inputFotoPost}/>
            <button onClick={props.addPost}>Criar Novo Post</button>
        </form>
    )
}

export default FormularioPost