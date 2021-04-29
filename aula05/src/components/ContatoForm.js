import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function ContatoForm(props) {
  const handleChange = (evt) => {
    evt.preventDefault();
    let { name, value } = evt.target;
    props.onContatoChange(name, value);
  };

  return (
    <div className="modal fade" id="contatoModal" tabIndex="-1" aria-labelledby="contatoModalLabel"
         aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="contatoModalLabel">Criar contato</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="contato-nome" className="col-form-label">Nome:</label>
                <input type="text" className="form-control" id="contato-nome" name="nome"
                       onChange={handleChange} value={props.novoContato.nome} />
              </div>
              <div className="mb-3">
                <label htmlFor="contato-telefone" className="col-form-label">Telefone:</label>
                <input type="text" className="form-control" id="contato-telefone" name="telefone"
                       onChange={handleChange} value={props.novoContato.telefone} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Cancelar
            </button>
            <button type="button" className="btn btn-primary" data-dismiss="modal"
                    onClick={props.salvarContato}>
              Criar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContatoForm;
