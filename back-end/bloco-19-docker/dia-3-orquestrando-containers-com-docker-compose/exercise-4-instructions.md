# Exercício 4

Agora vamos praticar os conceitos de volumes e networks .

Configure o nosso serviço mysql para utilizar um volume, conforme vimos no conteúdo, crie o volume db-data e utilize o caminho target /var/lib/mysql .

Ao invés de utilizar a rede padrão criada pelo Compose, defina uma rede chamada my-network para a comunicação dos dois serviços.

Defina a política de restart para always em todos os serviços;

Suba o ambiente com o novo arquivo usando o docker-compose e então acesse-o.