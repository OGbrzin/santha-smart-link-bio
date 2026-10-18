/**
 * SANTHA SMART — Link na Bio
 * app.js — Lógica principal
 * =====================================================
 * CONFIGURAÇÃO CENTRAL: Para alterar o número do
 * WhatsApp, edite APENAS a constante abaixo.
 */

const WHATSAPP_NUMBER = '5511911932411';

/**
 * Abre o WhatsApp com uma mensagem pré-preenchida.
 * @param {string} mensagem - Texto da mensagem
 */
function abrirWhatsApp(mensagem) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

/* =====================================================
   CATÁLOGO — Renderização de produtos
   ===================================================== */

/**
 * Gera o HTML do badge de estoque/condição.
 * @param {string} condicao
 * @param {string} estoque
 * @returns {string} HTML
 */
function renderBadges(condicao, estoque) {
  let html = '';

  if (estoque === 'Em estoque') {
    html += '<span class="badge badge-success">Em estoque</span>';
  } else if (estoque === 'Últimas unidades') {
    html += '<span class="badge badge-warning">Últimas unidades</span>';
  } else if (estoque === 'Última unidade') {
    html += '<span class="badge badge-warning">Última unidade</span>';
  }

  if (condicao === 'Novo') {
    html += '<span class="badge badge-info">Novo</span>';
  } else if (condicao === 'Seminovo') {
    html += '<span class="badge badge-premium">Seminovo</span>';
  }

  return html;
}

/**
 * Gera o HTML do card de produto.
 * @param {Object} produto
 * @returns {string} HTML
 */
function renderCard(produto) {
  const msg = `Olá! Vim pelo catálogo da Santha Smart e gostaria de consultar a disponibilidade e as condições do ${produto.nome}.`;
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

  const imgHtml = produto.imagem
    ? `<img
          src="${produto.imagem}"
          alt="${produto.nome}"
          class="product-image"
          loading="lazy"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        >
        <div class="product-placeholder" style="display:none;" aria-hidden="true">
          <i class="ph ph-device-mobile"></i>
        </div>`
    : `<div class="product-placeholder" aria-hidden="true">
         <i class="ph ph-device-mobile"></i>
       </div>`;

  return `
    <article class="product-card" data-marca="${produto.marca}">
      <div class="product-badges">${renderBadges(produto.condicao, produto.estoque)}</div>
      <div class="product-image-wrapper">${imgHtml}</div>
      <div class="product-info">
        <h3 class="product-title">${produto.nome}</h3>
        <div class="product-meta">
          <span class="product-spec">
            <i class="ph ph-hard-drives"></i>${produto.armazena}
          </span>
          ${produto.ram ? `<span class="product-spec"><i class="ph ph-memory"></i>${produto.ram} RAM</span>` : ''}
          <span class="product-spec">
            <i class="ph ph-shield-check"></i>Garantia: ${produto.garantia}
          </span>
        </div>
        <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="product-cta">
          <i class="ph-fill ph-whatsapp-logo"></i> Consultar no WhatsApp
        </a>
      </div>
    </article>
  `;
}

/**
 * Renderiza todos os cards no grid.
 */
function renderCatalog() {
  const grid = document.getElementById('produtos-grid');
  if (!grid || !Array.isArray(produtos) || produtos.length === 0) return;

  grid.innerHTML = produtos.map(renderCard).join('');
}

/* =====================================================
   FILTRO DE PRODUTOS
   ===================================================== */
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const grid = document.getElementById('produtos-grid');
  if (!filterBtns.length || !grid) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update aria states
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.dataset.filter;
      const cards = grid.querySelectorAll('.product-card');

      cards.forEach(card => {
        const marca = card.dataset.marca;
        if (filter === 'all' || marca === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* =====================================================
   SMOOTH SCROLL para links internos
   ===================================================== */
function initSmoothScroll() {
  document.querySelectorAll('.scroll-link, a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const headerH = document.querySelector('.site-header')?.offsetHeight || 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* =====================================================
   FOOTER — Ano automático
   ===================================================== */
function setFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

/* =====================================================
   HEADER — Sombra ao rolar
   ===================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    header.style.borderBottomColor = window.scrollY > 30
      ? 'rgba(91, 175, 230, 0.2)'
      : 'var(--clr-black-border)';
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}

/* =====================================================
   PLACEHOLDER CSS dinâmico (fallback de imagem)
   ===================================================== */
function injectPlaceholderStyle() {
  if (document.getElementById('placeholder-style')) return;
  const style = document.createElement('style');
  style.id = 'placeholder-style';
  style.textContent = `
    .product-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      color: var(--clr-gray-dark);
      font-size: 3.5rem;
    }
  `;
  document.head.appendChild(style);
}

/* =====================================================
   INIT — Entry Point
   ===================================================== */
document.addEventListener('DOMContentLoaded', () => {
  injectPlaceholderStyle();
  renderCatalog();
  initFilters();
  initSmoothScroll();
  setFooterYear();
  initHeaderScroll();
});
