# Configuração global (apenas uma vez no computador)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Inicializar repositório
git init

# Alterar nome da branch padrão para main
git branch -M main

# Adicionar arquivos
git add .

# Criar commit
git commit -m "mensagem do commit"

# Conectar ao repositório remoto
git remote add origin URL_DO_REPOSITORIO

# Enviar para o GitHub
git push -u origin main