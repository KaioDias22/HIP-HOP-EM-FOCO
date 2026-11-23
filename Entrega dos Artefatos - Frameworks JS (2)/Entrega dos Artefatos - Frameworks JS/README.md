# Hip Hop em Foco

Aplicação acadêmica em React Native, Expo SDK 54 e TypeScript, com versão para navegador e dispositivos móveis. Reúne perfis de seis artistas, descoberta por estilo, carrossel de músicas, ranking de rap, Grammy e formulário demonstrativo.

## Requisitos

- Node.js compatível com Expo SDK 54 e npm
- Visual Studio Code (recomendado)
- Para dispositivos: Expo Go ou emulador compatível

## Instalar e executar

Abra a pasta que contém o `package.json` e execute no terminal:

```powershell
npm.cmd install
npm.cmd run typecheck
npm.cmd run web
```

Para abrir no Expo Go:

```powershell
npx.cmd expo start
```

Se houver problemas de cache:

```powershell
npx.cmd expo start --web --clear
```

No PowerShell, `npm.cmd` e `npx.cmd` evitam erros de execução do script `.ps1` em computadores com políticas restritivas. Em outros terminais, `npm` e `npx` funcionam normalmente.

## Organização do código

```text
App.tsx                          Navegação principal e configuração visual
app.json                         Expo e favicon
assets/                          Ilustração, favicon e fotografias dos artistas
src/
  screens/
    HomeScreen.tsx                Composição das seções e navegação interna
    ArtistScreen.tsx              Página de perfil dos artistas
  components/
    layout/                       Cabeçalho, banner, títulos e rodapé
    artists/                      Cards, filtros por vibe e sorteio
    music/                        Carrossel de faixas do projeto
    rankings/                     Alternância entre Rap Songs e Grammy
    forms/                        Campos do formulário e seletor de estilo
    common/                       Componentes comuns: seção, lista, link
  data/
    artists.ts                    Artistas, biografias e álbuns
    artistFilters.ts              Classificação editorial por vibe
    featuredTracks.ts             Dez faixas editoriais do projeto
    rapRanking.ts                 Posições e metadados do recorte consultado
    grammy.ts                     Lista de categorias e vencedores
    introduction.ts               Texto de introdução
  hooks/
    useSectionNavigation.ts       Rolagem para as seções da página
    useTrackCarousel.ts           Estado e rotação do carrossel
  utils/
    links.ts                      Abertura de pesquisa no Spotify
    validation.ts                 Regras e tipos de validação do formulário
  types/
    content.ts                    Tipos derivados dos dados dos artistas
  navigation.ts                   Tipos das rotas do aplicativo
  theme.ts                        Paleta visual compartilhada
```

## Funcionalidades

- Cabeçalho com navegação desktop e menu hambúrguer em telas menores.
- Destaque visual com ilustração `graduation-bg.png` em proporção preservada.
- Seis artistas com fotos completas, biografias, formação, músicas e álbuns.
- Filtro editorial por vibe: Lírico, Experimental e Trap.
- Botão **Me surpreenda** para selecionar um artista do filtro ativo.
- Carrossel com 10 faixas, rotação automática, pausa e controles.
- Links que abrem uma **busca no Spotify**, sem reproduzir faixas no aplicativo.
- Abas de Hot Rap Songs e Grammy.
- Formulário que valida campos **localmente**, sem gravar nem enviar informações.
- Favicon configurado em `app.json`.

## Fontes e limitações

- As imagens dos artistas estão incluídas em `assets/artists`. Não é preciso baixar fotografias separadamente.
- As faixas do carrossel são uma curadoria do projeto, **não** um ranking de reprodução do Spotify.
- O recorte de **Hot Rap Songs** está em `src/data/rapRanking.ts`, com data de referência (21/11/2026) e link de um arquivo **não oficial**. Confirme o conteúdo na fonte oficial antes de utilizar como ranking auditado; não há atualização automática.
- Dados do Grammy e biografias são conteúdo editorial do projeto e não atualizados automaticamente.
- O formulário serve apenas para testes de validação e não possui backend.
- Uso de imagens, capas e marcas em eventual publicação pública exige verificar permissões e créditos aplicáveis.

## Testes propostos

1. Confirmar abertura da página web e navegação desktop.
2. Redimensionar o navegador e confirmar menu hambúrguer no celular.
3. Abrir os seis perfis e testar retorno.
4. Testar filtros por vibe e o sorteador de artistas.
5. Testar avançar, voltar, pausar e retomar o carrossel.
6. Testar abertura dos links do Spotify.
7. Alternar entre as abas Hot Rap Songs e Grammy.
8. Validar formulário vazio e preenchido.
9. Conferir textos, imagens, favicon e responsividade.

Este README descreve as funções previstas pelo código. Execução completa em navegador e celular deve ser validada em ambiente com dependências instaladas.

## Equipe

- Edvan dos Santos Noronha — Desenvolvimento React Native.
- Kaio Estevam Pereira Dias — Desenvolvimento front-end.
- João Paulo do Nascimento — Testes funcionais.
- Larisse Ribeiro dos Reis — Pesquisa de conteúdo e testes.
- Renan Belisia Requena — Design e interface visual.

## Quiz musical e curiosidades

- `src/components/quiz/ArtistQuiz.tsx`: interface do quiz de quatro perguntas, respostas, progresso e resultado.
- `src/data/quiz.ts`: perguntas, associações entre respostas e artistas e regra de pontuação (2 pontos para associação principal e 1 para secundária). Em caso de empate, vale a ordem de cadastro dos artistas.
- `src/components/artists/ArtistCuriosities.tsx`: apresenta dois cards informativos em cada perfil de artista.
- `src/data/artistFacts.ts`: curiosidades editadas a partir das biografias existentes em `src/data/artists.ts`.
- `src/hooks/useSectionNavigation.ts`: inclui a seção Quiz na navegação da página inicial.

O quiz é uma recomendação editorial para descoberta musical. Não exige login, não salva respostas e não coleta dados pessoais.

### Testes adicionais

1. Abrir o menu e navegar até Quiz em desktop e celular.
2. Selecionar uma resposta em cada uma das quatro perguntas; conferir avanço, retorno e resultado.
3. Confirmar que o botão de conhecer artista abre o perfil correto.
4. Refazer o quiz e experimentar combinações diferentes de respostas.
5. Conferir dois cards de curiosidades em cada um dos seis perfis.
6. Verificar o filtro Lírico com dois cards lado a lado no desktop, sem lacuna central.

## Fotografias locais

As imagens estão incluídas no repositório em `assets/artists/` e são carregadas diretamente pelo React Native. O professor **não precisa executar comandos adicionais para baixá-las**. O app usa `src/data/artistImages.ts` com `require()` para cada arquivo.

Nesta versão de entrega, os retratos são **composições editoriais locais a partir das fotografias que aparecem nas capturas de tela fornecidas durante o desenvolvimento**. Devido à resolução das capturas, a qualidade é inferior à dos arquivos originais. Para uma publicação aberta ao público, substituir por arquivos oficiais em alta resolução e verificar as permissões de uso.

## Fontes e créditos de referência das fotografias

A origem das fotografias usadas no protótipo do site é Wikimedia Commons, conforme os endereços cadastrados em `src/data/artists.ts`. Atribuições e condições de uso devem ser confirmadas nas páginas dos arquivos originais:

- Kanye West: https://commons.wikimedia.org/wiki/File:Kanye_West_at_the_2009_Tribeca_Film_Festival_(crop_2).jpg
- A$AP Rocky: https://commons.wikimedia.org/wiki/File:A$AP_Rocky_performing_at_Hovefestivalen_2013.jpg
- Kendrick Lamar: https://commons.wikimedia.org/wiki/File:Kendrick_Lamar_3_F.I.B._2016_(cropped_3).jpg
- Tyler, The Creator: https://commons.wikimedia.org/wiki/File:Tyler_the_Creator_2022_cropped.png
- Playboi Carti: https://commons.wikimedia.org/wiki/File:Playboi_Carti.jpg
- Future: https://commons.wikimedia.org/wiki/File:Future_(rapper)_2014_(cropped).JPG
