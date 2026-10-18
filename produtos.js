/**
 * SANTHA SMART — Catálogo de Produtos
 * =====================================================
 * Para adicionar/remover/atualizar um produto, edite
 * apenas o array `produtos` abaixo.
 *
 * Campos disponíveis:
 *   id         → número único
 *   nome       → nome completo do aparelho
 *   marca      → "Samsung" | "Apple" | "Motorola" | "Realme" | etc.
 *   armazena   → ex: "128GB"
 *   ram        → ex: "6GB"  (opcional)
 *   condicao   → "Novo" | "Seminovo"
 *   garantia   → ex: "1 Ano" | "3 Meses"
 *   estoque    → "Em estoque" | "Última unidade" | "Últimas unidades"
 *   imagem     → caminho relativo para a imagem (ex: "./assets/Galaxy A36.png")
 *               → use "" para exibir placeholder elegante
 */

const produtos = [
  {
    id: 1,
    nome: "Samsung Galaxy A36",
    marca: "Samsung",
    armazena: "256GB",
    ram: "8GB",
    condicao: "Novo",
    garantia: "1 Ano",
    estoque: "Em estoque",
    imagem: "./assets/Galaxy A36.png"
  },
  {
    id: 2,
    nome: "Samsung Galaxy A17",
    marca: "Samsung",
    armazena: "128GB",
    ram: "6GB",
    condicao: "Novo",
    garantia: "1 Ano",
    estoque: "Últimas unidades",
    imagem: "./assets/Galaxy A17.png"
  },
  {
    id: 3,
    nome: "Samsung Galaxy A07",
    marca: "Samsung",
    armazena: "128GB",
    ram: "4GB",
    condicao: "Novo",
    garantia: "1 Ano",
    estoque: "Em estoque",
    imagem: "./assets/Galaxy A07.png"
  },
  {
    id: 4,
    nome: "Realme C75",
    marca: "Realme",
    armazena: "256GB",
    ram: "8GB",
    condicao: "Novo",
    garantia: "1 Ano",
    estoque: "Em estoque",
    imagem: "./assets/Realme C75.png"
  },
  {
    id: 5,
    nome: "Moto G35 5G",
    marca: "Motorola",
    armazena: "128GB",
    ram: "6GB",
    condicao: "Novo",
    garantia: "1 Ano",
    estoque: "Em estoque",
    imagem: "./assets/Moto G35.png"
  },
  {
    id: 6,
    nome: "Moto G15 5G",
    marca: "Motorola",
    armazena: "128GB",
    ram: "4GB",
    condicao: "Novo",
    garantia: "1 Ano",
    estoque: "Em estoque",
    imagem: "./assets/Moto G15.png"
  },
  {
    id: 7,
    nome: "iPhone XR",
    marca: "Apple",
    armazena: "64GB",
    ram: "3GB",
    condicao: "Seminovo",
    garantia: "3 Meses",
    estoque: "Em estoque",
    imagem: "./assets/IPhone XR.png"
  },
  {
    id: 8,
    nome: "iPhone 13 Pro",
    marca: "Apple",
    armazena: "128GB",
    ram: "6GB",
    condicao: "Seminovo",
    garantia: "1 Ano",
    estoque: "Última unidade",
    imagem: "./assets/IPhone 13 Pro.png"
  },
  {
    id: 9,
    nome: "iPhone 13",
    marca: "Apple",
    armazena: "128GB",
    ram: "6GB",
    condicao: "Seminovo",
    garantia: "1 Ano",
    estoque: "Última unidade",
    imagem: "./assets/IPhone 13.png"
  },
  {
    id: 10,
    nome: "iPhone 11 Pro Max",
    marca: "Apple",
    armazena: "256GB",
    ram: "6GB",
    condicao: "Seminovo",
    garantia: "1 Ano",
    estoque: "Em estoque",
    imagem: "./assets/IPhone 11 Pro Max.png"
  },
  {
    id: 11,
    nome: "iPhone 11",
    marca: "Apple",
    armazena: "64GB",
    ram: "3GB",
    condicao: "Seminovo",
    garantia: "1 Ano",
    estoque: "Última unidade",
    imagem: "./assets/IPhone 11.png"
  },
  {
    id: 12,
    nome: "Realme Note 70",
    marca: "Realme",
    armazena: "256GB",
    ram: "8GB",
    condicao: "Novo",
    garantia: "1 Ano",
    estoque: "Em estoque",
    imagem: "./assets/Realme Note 70.png"
  }
];
