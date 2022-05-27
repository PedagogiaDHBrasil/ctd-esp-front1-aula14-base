import PropTypes from "prop-types";

// Devemos tipar as props do nosso componente
// Talvez possamos usar a interface já criada nas mensagens?

const ListarMensagens = ({ mensagens = [], selecionarMensagem }) => (
  <div id="listarMensagens">
    {mensagens.map((mensagem) => (
      <div onClick={() => selecionarMensagem(mensagem.id)} key={mensagem.id}>
        <strong>
          De: {mensagem.remitente.nome} {mensagem.remitente.sobrenome}
        </strong>
        <p>Assunto: {mensagem.assunto}</p>
        <small> {mensagem.data}</small>
      </div>
    ))}
  </div>
);

ListarMensagens.propTypes = {
  mensagens: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      remitente: PropTypes.string.isRequired,
      assunto: PropTypes.string.isRequired,
      data: PropTypes.string.isRequired,
    })
  ),
};

export default ListarMensagens;
