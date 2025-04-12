# Etapa 1: Imagem base com Node e pnpm
FROM node:20 AS base

# Instalar pnpm na versão usada no projeto
RUN npm install -g pnpm@8.6.2

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos de dependências primeiro (cache eficiente)
COPY package.json pnpm-lock.yaml ./

# Instalar dependências com lockfile
RUN pnpm install --frozen-lockfile

# Copiar todo o restante do código da aplicação
COPY . .

# Etapa 2: Build do projeto (opcional, se tiver build em TypeScript separado)
# RUN pnpm run build

# Etapa 3: Executar a aplicação
CMD ["pnpm", "start"]

FROM node:20-alpine AS base

RUN npm install -g pnpm@8.6.2

WORKDIR /app

# Copia arquivos importantes
COPY .npmrc package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

CMD ["pnpm", "start"]


