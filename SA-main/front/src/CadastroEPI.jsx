import React, { useState } from 'react'
import axios from 'axios'

function CadastrarEPI() {
    const [nome, setNome] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [id, setID] = useState('')
    const [mensagem, setMensagem] = useState('')

    const cadastro_epi = async (e) => {
        e.preventDefault();

        try {
            const resposta = await axios.post('http://localhost:3000/cadastro_epi', {
                nome, quantidade
            })
            setMensagem(resposta.data.mensagem)
            // Limpar os campos após o cadastro
            setNome('')
            setQuantidade('')
        } catch (error) {
            console.error("Erro ao cadastrar epi:", error)
            setMensagem('Erro ao cadastrar epi')
        }
    }

    const atualizarEpi = async () => {
        try {
            const resposta = await axios.put(`http://localhost:3000/atualizar_epi/${id}`, {
                nome, quantidade
            })
            setMensagem(resposta.data.mensagem)
        } catch (error) {
            console.error("Erro ao atualizar epi:", error)
            setMensagem('Erro ao atualizar epi')
        }
    }

    const apagarEpi = async () => {
        const senhaConfirmacao = window.prompt("Digite a senha do administrador para confirmar a exclusão:");
    
        if (!senhaConfirmacao) {
            setMensagem('Exclusão cancelada. Senha não fornecida.');
            return;
        }
    
        try {
            // Envia a requisição para apagar o funcionário com a senha do administrador
            const respostaExcluir = await axios.delete(`http://localhost:3000/apagar_epi/${id}`, {
                data: { senha: senhaConfirmacao } // A senha é enviada no corpo da requisição
            });
            setMensagem(respostaExcluir.data.mensagem);
        } catch (error) {
            console.error("Erro ao excluir funcionário:", error);
            setMensagem('Erro ao excluir funcionário');
        }
    };
    

    return (
        <div className="cadastrar-container">
            <h1>Cadastrar EPI</h1>
            <form onSubmit={cadastro_epi} className="cadastrar-form">
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Quantidade:</label>
                    <input
                        type="number"
                        value={quantidade}
                        onChange={(e) => setQuantidade(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>ID:</label>
                    <input
                        type="text"
                        value={id}
                        onChange={(e) => setID(e.target.value)}
                    />
                </div>

                <div className="cadastrar-buttons">
                    <button type="submit">Cadastrar</button>
                    <button type="button" onClick={atualizarEpi}>Atualizar</button>
                    <button type="button" onClick={apagarEpi}>Excluir</button>
                </div>
            </form>
            {mensagem && <p className="cadastrar-message">{mensagem}</p>}
        </div>
    );
}

export default CadastrarEPI;