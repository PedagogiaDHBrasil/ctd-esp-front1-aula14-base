import PropTypes from "prop-types";

// Devemos tipar as props do nosso componente
// Talvez possamos usar a interface já criada nas mensagens?

const VerMensagem = ({ mensagem }) =>
  mensagem ? (
    <div id="verMensagem">
      <h3 className="titulo">{mensagem.assunto}</h3>
      <strong>
        {mensagem.remitente.nome} {mensagem.remitente.sobrenome} (
        {mensagem.email})
      </strong>
      <p>{mensagem.texto}</p>
    </div>
  ) : null;

VerMensagem.propTypes = {
  mensagem: PropTypes.shape({
    asunto: PropTypes.string.isRequired,
    remitente: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
  }),
};

export default VerMensagem;
