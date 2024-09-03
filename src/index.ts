import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())

let mockData = [
  {
    id: 1,
    name: 'Product A',
    price: 100,
  },
  {
    id: 2,
    name: 'Product B',
    price: 200,
  },
]

app.get('/data', (req, res) => {
  const page = parseInt(req.query.page as string) || 1
  const limit = parseInt(req.query.limit as string) || 10
  const start = (page - 1) * limit
  const end = start + limit

  res.json(mockData.slice(start, end))
})

app.listen(PORT, () => {
  console.log(`Report requester service running on http://localhost:${PORT}`)
})
