alert("Hello, World!!!");

/*

                            git remote

O comando git remote possui algumas variações e parâmetros
opcionais que servem em certas situações. A seguir, terão alguns
exemplos de usos desse comando:

1 - Adicionar um repositório remoto:

Quando deseja fazer a conexão entre o repositório local e o
remoto, como o do GitHub, o comando "git remote add" é necessário
para isso. Essa etapa é crucial para possibilitar a colaboração e
o compartilhamento de código com outras pessoas, como também para
fazer backup em um servidor remoto.
A sintaxe básica do comando é a seguinte:

git remote add apelido url

'apelido': Este é um nome que você atribui ao repositório remoto.
Geralmente, se utiliza nomes descritivos, como "origin" para o
repositório principal no GitHub, mas você pode escolher nomes que
façam sentido para o seu projeto.

'url': Aqui, você insere a URL do repositório remoto. Esta URL é
única para cada repositório remoto e serve como o endereço para
acessar e interagir com ele pela internet. Certifique-se de
copiar a URL correta do repositório que deseja adicionar.

2 - Listar os repositórios remotos:

Para listar os repositórios remotos associados ao seu projeto
local, você pode utilizar o comando git remote -v. Isso exibirá
uma lista de todos os repositórios remotos vinculados ao seu
projeto, juntamente com suas URLs. Veja um exemplo:

git remote -v

A saída ser mais ou menos assim:

origin   https://github.com/seu-usuario/seu-projeto.git (fetch)
origin   https://github.com/seu-usuario/seu-projeto.git (push)

Essa lista é útil para verificar se os repositórios remotos estão
configurados corretamente. Obs: Vai aparecer duplicado mesmo, pois
o Git separa a url de envio de commits (push) da url de baixar
commits (fetch).

3 - Remover um repositório remoto:

Caso não seja necessário mais de um repositório remoto específico,
pode removê-lo com o comando "git remote remove apelido".
Substitua 'apelido' pelo nome do repositório remoto que deseja
remover. Aqui está um exemplo:

git remote remove origin

Após a execução do comando, o repositório remoto "origin" será
desvinculado do seu projeto local.

4 - Alterar a URL de um repositório remoto:

Às vezes, é necessário atualizar a URL de um repositório remoto,
como quando a URL do servidor do GitHub é modificada ou quando
você copiou a URL incorreta ao adicionar o repositório remoto.
Use o comando "git remote set-url apelido nova_url" para realizar
essa atualização. Substitua 'apelido' pelo nome do repositório
remoto e 'nova_url' pela nova URL que você deseja associar a ele.
Aqui está um exemplo:

git remote set-url origin https://github.com/seu-usuario/seu-repositorio.git

Isso atualizará a URL do repositório remoto "origin" para a nova
URL especificada.

5 - Alterar o apelido de um repositório remoto:

Se deseja renomear um repositório remoto, use o comando
"git remote rename apelido novo_apelido". Substitua 'apelido' pelo
nome atual do repositório remoto e 'novo_apelido' pelo novo nome
que deseja atribuir a ele. Aqui está um exemplo:

git remote rename origin novo-origin

Isso renomeará o repositório remoto de "origin" para "novo-origin".

O comando git remote é fundamental para a gestão de conexões entre
o repositório local e remoto, permitindo a colaboração eficiente e
o controle de versão. Praticar esses comandos em seu ambiente de
desenvolvimento ajudará a consolidar seu entendimento.

*/