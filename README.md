# Conex-o-Cultural

Site sobre a diversidade cultural entre o mundo.

## Estrutura de arquivos

```text
/  (raiz do repositório)
├── index.html              página inicial em português
├── pedro.html              página de Pedro
├── andre.html              página de André
├── gabriel.html            página de Gabriel
├── cronica.html            texto de apoio
├── assets/
│   ├── css/                estilos CSS
│   ├── img/                imagens usadas pelas páginas
│   └── js/                 scripts JavaScript
├── en/
│   ├── index.html          página inicial em inglês
│   ├── pedro.html
│   ├── andre.html
│   ├── gabriel.html
│   └── cronica.html
└── README.md
```

## Padrões

- Os nomes de arquivos e pastas devem usar letras minúsculas.
- Não usar acentos, cedilhas ou espaços nos nomes de arquivos e imagens.
- Preferir hífens para separar palavras, por exemplo: `nascimento-gabriel.png`.
- A versão portuguesa fica na raiz do projeto.
- A versão inglesa fica dentro da pasta `en/` com o mesmo nome da página portuguesa.
- Recursos dentro da pasta `assets/` devem ser referenciados por caminhos relativos.

## Tema escuro

O tema escuro é controlado pelo JavaScript apenas para alterar o atributo `data-tema` do HTML e salvar a preferência no navegador. Todas as cores ficam definidas em CSS e estão disponíveis nas páginas em português e inglês.
