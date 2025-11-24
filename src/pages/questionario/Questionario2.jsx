// frontend/src/pages/questionario/Questionario2.jsx

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { perguntasQuestionario, calcularClassificacao } from "./perguntas";
import logo from "../../assets/logo.png";
import "./questionario.css";
import capiba from "../../assets/capiba.png";
import api from '../../services/api'; // Importa a instância do Axios configurada

export default function Questionario2() {
  const navigate = useNavigate();
  const location = useLocation();

  // Estados locais do componente
  // Não há desestruturação de useQuestionario, pois o contexto não existe.
  const [cpf, setCpf] = useState('');
  const [respostasPerfil, setRespostasPerfil] = useState({});
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostasQuestionario, setRespostasQuestionario] = useState({});
  const [pontuacaoTotal, setPontuacaoTotal] = useState(0);
  const [pontosGanhos, setPontosGanhos] = useState(0);
  const [mostrarModalPontos, setMostrarModalPontos] = useState(false);
  const [etapa, setEtapa] = useState('transicao'); // transicao, questionario, resultado
  const [loading, setLoading] = useState(false);

  // Efeito para carregar os dados do perfil ao iniciar
  useEffect(() => {
    if (location.state && location.state.cpf && location.state.perfil) {
      setCpf(location.state.cpf);
      setRespostasPerfil(location.state.perfil);
      console.log('✅ Dados de perfil carregados em Questionario2:', location.state);
    } else {
      // Se não houver dados, volta para o início do questionário
      console.error('❌ Dados de perfil não encontrados. Redirecionando para /questionario.');
      navigate('/questionario');
    }
  }, [location.state, navigate]);

  const handleIniciarTeste = () => {
    setEtapa('questionario');
    setPerguntaAtual(0);
  };

  const handleRespostaQuestionario = (opcao) => {
    const pergunta = perguntasQuestionario[perguntaAtual];
    const pontos = opcao.pontos;
    setRespostasQuestionario({
      ...respostasQuestionario,
      [`pergunta_${pergunta.id}`]: pontos // Salva com o formato pergunta_ID
    });
    setPontuacaoTotal(pontuacaoTotal + pontos);
    setPontosGanhos(pontos);
    setMostrarModalPontos(true);
  };

  const handleProximaPergunta = () => {
    setMostrarModalPontos(false);
    if (perguntaAtual < perguntasQuestionario.length - 1) {
      setPerguntaAtual(perguntaAtual + 1);
    } else {
      // Terminou questionário, envia dados
      enviarRespostas();
    }
  };

  const enviarRespostas = async () => {
    setLoading(true);
    const dados = {
      cpf: cpf,
      perfil: respostasPerfil,
      questionario: respostasQuestionario,
      pontuacao_total: pontuacaoTotal
    };
    console.log('📤 Enviando dados completos para o backend:', dados);
    try {
      // <--- AQUI ESTÁ A CORREÇÃO: USAR 'api.post' EM VEZ DE 'fetch'
      const response = await api.post('/questionario/responder', dados); 

      if (response.data.success) {
        console.log('✅ Respostas salvas com sucesso no backend:', response.data.data);
        // setResultadoFinal(response.data.data); // REMOVIDO: Não é necessário, pois não há setResultadoFinal definido
        setEtapa('resultado'); // Isso fará com que o componente renderize o bloco de resultado
        // navigate('/resultado'); // REMOVIDO: O resultado é exibido neste mesmo componente
      } else {
        console.error('❌ Erro ao salvar respostas do backend:', response.data.message);
        alert('Erro ao salvar respostas: ' + response.data.message);
      }
    } catch (error) {
      console.error('❌ Erro ao enviar respostas para o backend:', error);
      alert('Erro ao enviar respostas');
    } finally {
      setLoading(false);
    }
  };

  // Renderizações condicionais
  if (loading) {
    return (
      <div className='questionario'>
        <img src={logo} alt="logo Perfil Digital" />
        <div className="loading">
          <p>Processando suas respostas...</p>
        </div>
      </div>
    );
  }

  if (etapa === 'transicao') {
    return (
      <div className='questionario'>
        <img src={logo} alt="logo Perfil Digital" className="logo-pequena" />
        <div className="modal-transicao">
          <h2>Vamos iniciar o sistema de pontos!</h2>
          <div className="icone-pontos">🎯</div>
          <button className="btn-iniciar" onClick={handleIniciarTeste}>
            Próximo
          </button>
        </div>
      </div>
    );
  }

  if (etapa === 'questionario') {
    const pergunta = perguntasQuestionario[perguntaAtual];
    return (
      <div className='questionario'>
        <img src={logo} alt="logo Perfil Digital" className="logo-pequena" />
        <div className="progresso">
          <span className="pontos-label">🔥 Pontos: {pontuacaoTotal}</span>
          <span>Etapa de Pontos ({perguntaAtual + 1} de {perguntasQuestionario.length})</span>
          <div className="barra-progresso">
            <div 
              className="barra-progresso-preenchida"
              style={{ width: `${((perguntaAtual + 1) / perguntasQuestionario.length) * 100}%` }}
            />
          </div>
        </div>
        <div className="pergunta-card">
          <h2 className="numero-pergunta">{pergunta.id}.</h2>
          <p className="texto-pergunta">{pergunta.pergunta}</p>
          <div className="opcoes">
            {pergunta.opcoes.map((opcao, index) => (
              <button
                key={index}
                className="opcao-btn"
                onClick={() => handleRespostaQuestionario(opcao)}
              >
                {opcao.texto}
              </button>
            ))}
          </div>
        </div>
        {/* Modal de Pontos Ganhos */}
        {mostrarModalPontos && (
          <div className="modal-overlay">
            <div className="modal-pontos">
              <h3>Você ganhou {pontosGanhos} pontos!</h3>
              <div className="icone-pontos-grande">🎯</div>
              <button className="btn-proximo-modal" onClick={handleProximaPergunta}>
                Próximo
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (etapa === 'resultado') {
    const resultado = calcularClassificacao(pontuacaoTotal);
    return (
      <div className='questionario'>
        <img src={logo} alt="logo Perfil Digital" />
        <div className="resultado-card">
          <h2>Parabéns! Você ganhou 10 capibas!</h2>
          <div className="moeda-icon">
            <img src={capiba} />
          </div>
          <div className="resultado-info">
            <h3>Desempenho:</h3>
            <p className="pontuacao">Você fez <strong>{pontuacaoTotal}</strong> pontos!</p>
            <p className="classificacao" style={{ color: resultado.cor }}>
              Seu nível de dependência é: <strong>{resultado.classificacao}</strong>
            </p>
            <p className="mensagem">{resultado.mensagem}</p>
          </div>
          <button className="btn-inicio" onClick={() => navigate('/')}>
            Início
          </button>
        </div>
      </div>
    );
  }

  return null;
}
