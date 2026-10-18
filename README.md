# Santha Smart — Link na Bio

Página de Link na Bio profissional para a **Santha Smart**, loja de smartphones localizada no Atrium Shopping em Santo André — SP.

## Estrutura de Arquivos

```
linkinbiosanthasmart/
├── index.html       ← Página principal (toda a estrutura HTML)
├── styles.css       ← Todo o CSS (paleta, responsividade, componentes)
├── app.js           ← Lógica JavaScript (catálogo, filtros, WhatsApp)
├── produtos.js      ← Array de produtos (EDITE AQUI para atualizar o estoque)
└── assets/
    ├── LogotipoSanthaSmart.png
    ├── favicon.png
    ├── Galaxy A07.png
    ├── Galaxy A17.png
    ├── Galaxy A36.png
    ├── IPhone 11.png
    ├── IPhone 11 Pro Max.png
    ├── IPhone 13.png
    ├── IPhone 13 Pro.png
    ├── IPhone XR.png
    ├── Moto G15.png
    ├── Moto G35.png
    ├── Realme C75.png
    └── Realme Note 70.png
```

## Visualizar Localmente

Abra o arquivo `index.html` diretamente no navegador — nenhum servidor é necessário.

> **Dica:** Para uma experiência mais fiel ao deploy, use a extensão **Live Server** no VS Code.

## Publicar no GitHub Pages

1. Acesse [github.com/new](https://github.com/new) e crie um repositório (ex: `linkinbiosanthasmart`)
2. Faça upload de todos os arquivos da pasta para o repositório
3. Vá em **Settings → Pages**
4. Em **Source**, selecione `main` e a pasta `/ (root)`
5. Clique em **Save** — a URL estará disponível em `https://<usuario>.github.io/linkinbiosanthasmart/`

## Como Atualizar o Catálogo de Produtos

Edite o arquivo **`produtos.js`** — adicione, remova ou modifique objetos no array `produtos`.

Exemplo de produto:
```js
{
  id: 13,
  nome: "Samsung Galaxy A55",
  marca: "Samsung",         // "Samsung" | "Apple" | "Motorola" | "Realme" | etc.
  armazena: "256GB",
  ram: "8GB",               // opcional
  condicao: "Novo",         // "Novo" | "Seminovo"
  garantia: "1 Ano",
  estoque: "Em estoque",    // "Em estoque" | "Última unidade" | "Últimas unidades"
  imagem: "./assets/Galaxy A55.png"  // deixe "" para exibir placeholder
}
```

Para adicionar a foto do produto, copie o arquivo PNG para a pasta `assets/` e atualize o campo `imagem`.

## Alterar o Número do WhatsApp

Abra **`app.js`** e edite a linha:

```js
const WHATSAPP_NUMBER = '5511911932411';
```

## Seções da Página

| Seção | Descrição |
|---|---|
| Header | Logo + botão "Nosso Site" fixo no topo |
| Hero | Foto de 3 aparelhos + CTA principal |
| Ações Rápidas | 5 botões: Vendedor, Catálogo, Android Boleto, iPhone Boleto, Site |
| Android no Boleto | Card com botão de consulta no WhatsApp |
| iPhone no Boleto | Card com botão de consulta no WhatsApp |
| Catálogo | Grade de produtos com filtro por marca |
| Como Chegar | Endereço + horários + botões Google Maps e WhatsApp |
| Instagram | Link para @santhasmartabc |
| Rodapé | Logo, infos, links rápidos, aviso de disponibilidade |

## O que Ainda Depende da Loja

- [ ] Fotos reais de produtos novos para atualizar o `assets/`
- [ ] Preços (quando quiser exibi-los, adicione o campo `preco` nos produtos e ajuste o `renderCard()` em `app.js`)
- [ ] Confirmação dos horários de funcionamento atuais
- [ ] Número de contato (confirmado: `5511911932411`)
