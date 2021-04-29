import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function ContatoEdit(props) {
  const handleChange = (evt) => {
    evt.preventDefault();
    let { name, value } = evt.target;
    props.onContatoSelected(name, value);
  };

  return (
    <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel"
         aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editModalLabel">Editar contato</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="contato-nome" className="col-form-label">Nome:</label>
                <input type="text" className="form-control" id="contato-nome" name="nome"
                       onChange={handleChange} value={props.contatoEditado.nome} />
              </div>

              <div className="mb-3">
                <label htmlFor="contato-telefone" className="col-form-label">Telefone:</label>
                <input type="text" className="form-control" id="contato-telefone" name="telefone"
                       onChange={handleChange} value={props.contatoEditado.telefone}  />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-dismiss="modal"
                    onClick={()=>props.editarContato(props.posicao)}>
              Editar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContatoEdit;
