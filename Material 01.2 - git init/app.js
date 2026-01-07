alert("Hello, World!!!");

/*

                    O que é o comando git init?

O comando git init cria um novo repositório Git vazio ou
reinicializa um repositório existente, devendo ser utilizado
apenas uma vez por diretório de projeto. Ele cria um subdiretório
chamado .git, que contém todos os arquivos necessários do
repositório Git, incluindo o histórico de versões, configurações e
metadados.

                Executando o comando git init

Caso você esteja começando um novo projeto e queira versionar seu
código com Git, você deve navegar até o diretório do seu projeto
no terminal e executar o comando git init. Isso inicializa um novo
repositório Git naquele diretório.
A saída do comando será semelhante a esta:

Initialized empty Git repository in /caminho/para/seu/projeto/.git/

Essa mensagem indica que o repositório Git foi criado com sucesso.
Após isso, você pode começar a adicionar arquivos ao repositório e
fazer commits para salvar o histórico de versões do seu projeto.

                Cuidados com o comando git init

É importante lembrar que o comando git init deve ser usado apenas
uma vez por diretório de projeto. Se você executar git init em um
diretório que já é um repositório Git, ele irá reinicializar o
repositório existente. Caso tenha feito esse comando, o Git irá
detectar que o repositório já existe e não sobrescreverá os dados
existentes, mas a reinicialização pode causar confusão se você
não estiver ciente disso.
A seguinte mensagem pode aparecer se você tentar inicializar um
repositório em um diretório que já é um repositório Git:

Reinitialized existing Git repository in /caminho/para/seu/projeto/.git/

É sempre uma boa prática verificar se o diretório já é um
repositório Git antes de executar o comando git init novamente.
Para isso, você pode usar o comando git status, que informará se o
diretório é um repositório Git ou não.
A seguinte mensagem indica que o diretório não é um repositório
Git:

fatal: not a git repository (or any of the parent directories): .git

------------------------------------------------------------------

*/