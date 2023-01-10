import { Router } from "express"
import Subscriber from "../models/Subscriber.js"

const router = Router()

// Getting all
router.get('/', async (req, res) => {
	try {
	  const data = await Subscriber.find()
		res.status(200).json({ data })
	} catch ({ message }) {
	  res.status(500).json({ message })
	}
})

// Getting one
router.get('/:id', async (req, res) => {
	const { id } = req.params
  try {
	  const data = await Subscriber.findById(id)
		res.status(200).json({ data })
	} catch ({ message }) {
	  res.status(500).json({ message })
	}
})

// Creating one
router.post('/', async (req, res) => {
	const { name, channelSubscribed } = req.body
	try {
	  const data = await Subscriber.create({
			name, 
			channelSubscribed
    })
		res.status(201).json({ data })
	} catch ({ message }) {
	  res.status(500).json({ message })
	}
})

// Updating one
router.patch('/:id', async (req, res) => {
	const { id } = req.params
	const { name, channelSubscribed } = req.body
	try {
	  const data = await Subscriber.findByIdAndUpdate({
			name, 
			channelSubscribed, 
			dateUpdated: Date.now()
    })
		res.status(200).json({ data })
	} catch ({ message }) {
	  res.status(500).json({ message })
	}
})

// Deleting one
router.delete('/:id', async (req, res) => {
	const { id } = req.params
  try {
	  const data = await Subscriber.findByIdAndDelete(id)
		res.status(200).json({ data })
	} catch ({ message }) {
	  res.status(500).json({ message })
	}
})

export default router