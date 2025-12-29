alert("Hello, World!!!");

/*

                            Chave SSH

Quando se usa uma chave SSH, um par de chaves é gerado: uma chave
pública e uma chave privada. A chave pública é compartilhada com
servidores ou serviços (como GitHub, GitLab, etc.) para
autenticação, enquanto a chave privada é mantida em segredo no seu
computador. A autenticação é feita usando a chave privada para
provar que você possui a chave pública correspondente, sem
precisar enviar a chave privada pela rede.
O GitHub checa a chave pública que você adicionou à sua conta e
verifica se a chave privada que você está usando corresponde a
essa chave pública. Se corresponderem, você é autenticado com
sucesso.

                    Geração de uma chave SSH

Antes de executar o comando git push, você precisa gerar uma chave
SSH (se ainda não tiver uma). Você pode fazer isso usando o
seguinte comando no terminal:
ssh-keygen -t ed25519 -C "SEU EMAIL AQUI"

Após isso, uma pergunta será feita sobre onde salvar a chave.
Pressione Enter para aceitar o local padrão. Em seguida, você pode
definir uma senha para a chave ou pressionar Enter novamente para
não usar senha.
Depois, uma nova pergunta será feita sobre a senha. Você pode
definir uma senha para a chave ou pressionar Enter novamente para
não usar senha.
Por último, uma terceira pergunta será feita para confirmar a
senha. Você pode confirmar a senha digitando-a novamente ou
pressionar Enter se não definiu uma senha.

                Cadastrando a chave SSH no GitHub

Após gerar a chave, é necessário cadastrar na conta do GitHub,
para que o mesmo consiga identificar e autenticar ao executar o
comando git push.
No GitHub, acesse a página de chaves SSH de sua conta no GitHub e
clique no botão New SSH key ou Nova chave SSH para realizar o
cadastro da chave.

No formulário de adição da chave SSH contém três campos:

Title: Informe um apelido para sua chave SSH
(por exemplo: computador casa);

Key type: Escolha o tipo Authentication Key;

Key: Nesse campo você deve colar o conteúdo do arquivo da
sua chave SSH pública (arquivo id_ed25519.pub)

Após realizar esse procedimento, será possível sincronizar o
repositório local com o remoto, enviando os novos commits com o
comando git push.

*/