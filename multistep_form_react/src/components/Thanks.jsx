import {
  BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill, 
} from 'react-icons/bs'

import "./Thanks.css"

const Thanks = ({data}) => {
  return (
    <div className="thanks-container">
        <h2>Falta pouco...</h2>

        <p>
          A sua opnião é muito importante, em breve você receberá um cupom de desconto para sua próxima compra.
        </p>

        <p>Para concluir sua avalição clique no botão enviar abaixo</p>

        <h3>Aqui está o resumo da sua avalição:</h3>

          <p className="review-data">
            <span>Satisfação do produto:</span>
          </p>
            <p className="review-data">
              <span>Comentário:</span>
            </p>
    </div>
  )
}

export default Thanks