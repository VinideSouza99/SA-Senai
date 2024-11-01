import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

export default function EpiDetalhes() {
    
    const { id } = useParams()
    const [epi, setEPI] = useState('')
    const [error, setError] = useState('')

    const carregarEPI = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/epi/${id}`)
            setEPI(response.data)
        } catch (error) {
            setError('Erro ao carregar EPI');
            console.error('Erro ao carregar EPI:', error.response || error)
        }
    }

    useEffect(() => {
        carregarEPI()
    }, [id])


    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            {epi ? (
                <>
                    <p>Nome: {epi.nome}</p>
                    <p>Quantidade: {epi.quantidade}</p>
                    <p>ID: {epi.id}</p>
                </>
            ) : (
                <p>EPI não encontrado.</p>
            )}
        </div>
    )
}
