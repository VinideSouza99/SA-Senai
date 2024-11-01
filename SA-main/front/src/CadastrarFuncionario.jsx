import React, { useState } from 'react'
import axios from 'axios'

function CadastrarFuncionario() {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [setor, setSetor] = useState('')
    const [telefone, setTelefone] = useState('')
    const [id, setMatricula] = useState('')
    const [mensagem, setMensagem] = useState('')

    const cadastro_funcionario = async (e) => {
        e.preventDefault();

        try {
            const resposta = await axios.post('http://localhost:3000/cadastro_funcionario', {
                nome, senha, email, setor, telefone
            })
            setMensagem(resposta.data.mensagem)
            // Limpar os campos após o cadastro
            setNome('')
            setSenha('')
            setEmail('')
            setSetor('')
            setTelefone('')
            setMatricula('')
        } catch (error) {
            setMensagem('Erro ao cadastrar funcionario')
        }
    }

    const atualizarFuncionario = async () => {
        try {
            const resposta = await axios.put(`http://localhost:3000/atualizar_funcionario/${id}`, {
                nome, setor, telefone
            })
            setMensagem(resposta.data.mensagem)
        } catch (error) {
            console.error("Erro ao atualizar funcionario:", error)
            setMensagem('Erro ao atualizar funcionario')
        }
    }

    const apagarFuncionario = async () => {
        const senhaConfirmacao = window.prompt("Digite a senha do administrador para confirmar a exclusão:");
    
        if (!senhaConfirmacao) {
            setMensagem('Exclusão cancelada. Senha não fornecida.');
            return;
        }
    
        try {
            // Envia a requisição para apagar o funcionário com a senha do administrador
            const respostaExcluir = await axios.delete(`http://localhost:3000/apagar_funcionario/${id}`, {
                data: { senha: senhaConfirmacao } // A senha é enviada no corpo da requisição
            });
            setMensagem(respostaExcluir.data.mensagem);
        } catch (error) {
            setMensagem('Erro ao excluir funcionário');
        }
    };
    

    return (
        <div className="cadastrar-container">
            <h1>Cadastrar Funcionario</h1>
            <form onSubmit={cadastro_funcionario} className="cadastrar-form">
                <div>
                    <label>Nome:</label>
                    <input 
                        type="text" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                        required />
                </div>
                <div>
                    <label>Senha:</label>
                    <input 
                        type="password" 
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)} 
                        required />
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="text" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required />
                </div>
                <div>
                    <label>Telefone:</label>
                    <input 
                        type="number" 
                        value={telefone} 
                        onChange={(e) => setTelefone(e.target.value)} 
                        required />
                </div>
                <div>
                    <label>Setor:</label>
                    <input 
                        type="text" 
                        value={setor} 
                        onChange={(e) => setSetor(e.target.value)} 
                        required />
                </div>
                <div>
                    <label>Matricula:</label>
                    <input 
                        type="text" 
                        value={id} 
                        onChange={(e) => setMatricula(e.target.value)} />
                </div>

                <div className="cadastrar-buttons">
                    <button type="submit">Cadastrar</button>
                    <button type="button" onClick={atualizarFuncionario}>Atualizar</button>
                    <button type="button" onClick={apagarFuncionario}>Excluir</button>
                </div>
            </form>

            {mensagem && <p className="cadastrar-message">{mensagem}</p>}
        </div>
    );
}

export default CadastrarFuncionario;