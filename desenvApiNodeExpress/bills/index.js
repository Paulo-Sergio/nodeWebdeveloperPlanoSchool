import express from 'express'
import create from './services/create'
import remove from './services/remove'
import list from './services/list'

const router = express.Router()

// http://localhost:3000/bills/
router.get('/', list)

// http://localhost:3000/bills/
router.post('/', create)

// http://localhost:3000/bills/1234567897489
router.delete('/:id', remove)

export default router