import React from 'react';
import ContatoForm from "./components/ContatoForm";
import ContatoEdit from "./components/ContatoEdit";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './App.css';

function Agenda() {
  let [contatos, setContatos] = React.useState([
    {"nome": "Joao", "telefone": "83 88998899"},
    {"nome": "Maria", "telefone": "84 87798899"},
    {"nome": "Pedro", "telefone": "85 99998899"}
  ]);

  let [novoContato, setNovoContato] = React.useState({ nome: '', telefone: ''});
  let [contatoEditado, setContatoEditado] = React.useState({ nome: '', telefone: ''});

  const onContatoChange = (name, value) => {
    let contatoCopia = Object.assign({}, novoContato);
    contatoCopia[name] = value;

    setNovoContato(contatoCopia);
  };
  const onContatoSelected = (name, value) => {
    let contatoCopia = Object.assign({}, contatoEditado);
    contatoCopia[name] = value;

    setContatoEditado(contatoCopia);
  };

  const salvarContato = (evt) => {
    let contatosCopia = [...contatos];
    contatosCopia.push(novoContato);
    setContatos(contatosCopia);
    setNovoContato({ nome: '', telefone: '' });
  };

  const editarContato = (indice, evt) => {
    let contatosCopia = [...contatos];
    //contatosCopia.push(novoContato);
    contatosCopia.splice(indice, 1,contatoEditado);
    setContatos(contatosCopia);
    setNovoContato({ nome: '', telefone: '' });
  };

  const excluirContato = (indice, evt) => {
    let contatosCopia = [...contatos];
    //contatosCopia.push(novoContato);
    contatosCopia.splice(indice, 1);
    setContatos(contatosCopia);
  };

  return (
    <React.Fragment>
      <Navegacao onContatoChange={onContatoChange} onContatoSubmit={salvarContato}
                 novoContato={novoContato} />
      <Main contatos={contatos} onContatoSelected={onContatoSelected} editarContato={editarContato}
                 contatoEditado={contatoEditado} excluirContato={excluirContato}/>
    </React.Fragment>
  );
}

function Navegacao(props) {
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1 nav-titulo">Agenda</span>
          <button type="button" className="btn btn-primary" data-toggle="modal"
                  data-target="#contatoModal">
            Criar contato
          </button>
          <React.Fragment>
            <ContatoForm novoContato={props.novoContato} onContatoChange={props.onContatoChange}
                         salvarContato={props.onContatoSubmit} />
          </React.Fragment>
      </nav>
    </header>
  );
}


function Main(props) {
  return (
    <section>
      <div className="container main-section">
        <Rastreador caminho="Contatos" />
        <Contatos contatos={props.contatos} onContatoSelected={props.onContatoSelected} 
        editarContato={props.editarContato} contatoEditado={props.contatoEditado} excluirContato={props.excluirContato}/>
      </div>
    </section>
  );
}

function Rastreador(props) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb rastreador bg-white">
        <li className="breadcrumb-item active">{props.caminho}</li>
      </ol>
    </nav>
  );
}




function Contato(props) {


  return (
    <div className="card shadow-sm bg-white rounded contato">
      <div className="card-body">
        <h3 className="card-title contato-titulo">{props.contato.nome}</h3>
        <h4 className="card-title">{props.contato.telefone}</h4>

        <button type="button" className="btn btn-danger btn-sm"
            onClick={()=>props.excluirContato(props.posicao)}>
          Excluir
        </button>
        <p>{props.posicao}</p>       
        <button type="button" className="btn btn-primary btn-sm" data-toggle="modal"
            data-target="#editModal">
          Editar contato
        </button> 
   
      </div>
    </div>
  );
}



function Contatos(props) {

  let listaContatos = props.contatos.map((contato, index) => 
 
    <React.Fragment> 
    
        <ContatoEdit contato={contato} key={index} posicao={index} onContatoSelected={props.onContatoSelected} 
        editarContato={props.editarContato} contatoEditado={props.contatoEditado}/>

        <Contato contato={contato} key={index} posicao={index} excluirContato={props.excluirContato}
        onContatoSelected={props.onContatoSelected} editarContato={props.editarContato} contatoEditado={props.contatoEditado} />       

    </React.Fragment>         

  ); 

  return (
    	<React.Fragment>
      		{listaContatos}
    	</React.Fragment>
  );
}


function App() {
  return (
    <Agenda />
  );
}

export default App;
