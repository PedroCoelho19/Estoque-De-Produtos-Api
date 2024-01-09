import app from './app/app'

const PORT = 5001

app.listen(PORT, () => {
  console.log(`[APP] - Servidor rodando na porta ${PORT} 🚀`.toUpperCase())
})
