import React from 'react'

export class Comentarios extends React.Component{

   
   
    render(){     
         const comentarios = this.props.novosComentarios.map((comentario)=>{
             return (<div key={comentario.texto}>{comentario.texto}</div>)
         })
        
         
         return <div className="container-comentarios">
                 <p>Comentarios:</p>
                 {comentarios}
                 
         </div>
    }
}