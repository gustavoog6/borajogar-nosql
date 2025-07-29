# Banco de Dados NoSQL – Projeto BoraJogar

Este projeto apresenta um modelo NoSQL para organização de rachas de futsal/society em uma plataforma recreativa.

## Objetivo

Criar um banco de dados flexível com coleções para usuários, jogos e quadras, que permita convites, confirmação de presença, avaliações e sugestões personalizadas.

## Como executar

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/BoraJogar.git
cd BoraJogar
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` com sua URI do MongoDB Atlas:

```env
MONGO_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/
```

4. Execute os scripts:

```bash
npm run insertUsuarios
npm run insertJogos
npm run insertQuadras
```

## Estrutura de coleções

### `usuarios`
```json
{
  "_id": "user001",
  "nome": "Carlos Silva",
  "idade": 28,
  "posicao_preferida": "goleiro",
  "cidade": "Uberlandia",
  "historico_jogos": ["jogo123"],
  "avaliacoes": [
    { "jogo_id": "jogo123", "nota": 5, "comentario": "Jogou bem demais!" }
  ]
}
```

### `jogos`
```json
{
  "_id": "jogo123",
  "local": "Arena Society Uberlandia",
  "data_hora": "2025-07-15T19:30:00",
  "tipo": "society",
  "numero_jogadores": 10,
  "organizador_id": "user001",
  "participantes": ["user001"],
  "status": "confirmado"
}
```

### `quadras`
```json
{
  "_id": "quadra001",
  "nome": "Arena Society Uberlandia",
  "endereco": {
    "rua": "Av. Floriano Peixoto, 123",
    "bairro": "Santa Monica"
  },
  "valor_por_hora": 120.0,
  "contato": "(34) 99999-0000"
}
```

## Recursos adicionais

- Sugestão de jogadores
- Recomendação de quadras
- Ranking local
- Avaliação pós-jogo
- Divisão de times

## Tecnologias

- MongoDB
- Node.js
- Redis (opcional)
- Neo4j / ArangoDB (modelo grafo)

## Futuras melhorias

- Integração com app móvel
- Notificações em tempo real
- Gráficos de desempenho dos jogadores
