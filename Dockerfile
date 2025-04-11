FROM node:18

# Diretório de trabalho
WORKDIR /app

# Ativar corepack e preparar pnpm
RUN corepack enable && corepack prepare pnpm@8.6.2 --activate

# Copiar arquivos
COPY . .

# Instalar dependências
RUN pnpm install

# Build do projeto (se houver)
RUN pnpm build

# Porta que será exposta
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["pnpm", "start"]

