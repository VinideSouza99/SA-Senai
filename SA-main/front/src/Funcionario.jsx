import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

export default function FuncionarioDetalhes() {
    
    const { id } = useParams()
    const [funcionario, setFuncionario] = useState('')
    const [error, setError] = useState('')

    const carregarFuncionario = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/funcionario/${id}`)
            setFuncionario(response.data)
        } catch (error) {
            setError('Erro ao carregar funcionário');
            console.error('Erro ao carregar funcionário:', error.response || error)
        }
    }

    useEffect(() => {
        carregarFuncionario()
    }, [id])


    if (error) {
        return <p>{error}</p>
    }

    return (
        <div className="funcionario-detalhes-container">
            {funcionario ? (
                <ul className="funcionario-detalhes-list">
                    <li className="funcionario-detalhes-item">Nome: {funcionario.nome}</li>
                    <li className="funcionario-detalhes-item">Setor: {funcionario.setor}</li>
                    <li className="funcionario-detalhes-item">Email: {funcionario.email}</li>
                    <li className="funcionario-detalhes-item">Telefone: {funcionario.telefone}</li>
                    <li className="funcionario-detalhes-item">Matrícula: {funcionario.id}</li>
                </ul>
            ) : (
                <p className="funcionario-not-found">Funcionário não encontrado.</p>
            )}
        </div>
    )
}