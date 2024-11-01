import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Inicial() {


    return (
        <div class='inicial_tela'>
            <div class='inicial_cabecalho'>
                <h1>EPI Center</h1>
                <div>
                    <Link to={`/funcionario/cadastro`}  >
                        <button class='inicial_cabecalho_bt'>
                            Cadastrar Funcionario
                        </button>
                    </Link>
                    <Link to={`/epi/cadastro`}  >
                        <button class='inicial_cabecalho_bt'>
                            Cadastrar EPI
                        </button>
                    </Link>
                </div>
            </div>
            <div class='inicial_campo_lista'>
                <Link to={`/lista_funcionarios`}  >
                    <button class='inical_bt_lista'> FUNCIONARIOS </button>
                </Link>
                <Link to={`/registro`} >
                    <button class='inical_bt_lista'> EPIs</button>
                </Link>
            </div>

        </div>
    )
}

export default Inicial
