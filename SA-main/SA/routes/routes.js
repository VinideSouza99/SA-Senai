import express from 'express'
import {
    cadastrarEPI, cadastrarFuncionario, login, funcionarios, epis,
    atualizarFuncionario, apagarFuncionario, validarSenha, atualizarEpi, apagarEpi, funcionario
} from '../controllers/controller.js'
const router = express.Router()

router.post('/cadastro_funcionario', cadastrarFuncionario)
router.get('/funcionarios', funcionarios)
router.get('/funcionario/:id', funcionario)
router.post('/login', login)
router.put('/atualizar_funcionario/:id', atualizarFuncionario)
router.delete('/apagar_funcionario/:id', apagarFuncionario)
router.post('/validar_senha/:id', validarSenha);
router.put('/atualizar_epi/:id', atualizarEpi)
router.delete('/apagar_epi/:id', apagarEpi)
router.post('/cadastro_epi', cadastrarEPI)
router.get('/epi', epis)

export default router

