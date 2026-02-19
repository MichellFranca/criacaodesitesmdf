// --- 1. CONFIGURAÇÕES ---
const NUMERO_WHATSAPP = "5571999092470"; // Seu número

// --- 2. BANCO DE DADOS (Projetos) ---
// Substitua os dados de comida pelos seus projetos de sites
const portfolio = [
    {
        id: 1,
        nome: "Site Institucional Moderno", // Mudei o nome para ficar mais atrativo
        desc: "Design elegante e responsivo para fortalecer a presença online e a credibilidade da sua empresa.",
        // AQUI ESTÁ A MUDANÇA:
        img: "img/portfolio-institucional.png", // Nome exato do arquivo que você salvou
        tipo: "Site Institucional"
    },
    {
        id: 2,
        nome: "E-commerce de Alta Conversão",
        desc: "Loja virtual completa com gestão de produtos e pagamentos seguros direto para você. Focada em vender 24/7.",
        // AQUI ESTÁ A MUDANÇA:
        img: "img/portfolio-ecommerce.png", // Nome exato do arquivo que você salvou
        tipo: "E-commerce"
    },
    {
        id: 3,
        nome: "Landing Page de Captura",
        desc: "Página estratégica de alta conversão para campanhas de marketing, focada em gerar leads.",
        // AQUI ESTÁ A MUDANÇA:
        img: "img/portfolio-landingpage.png", // Nome exato do arquivo que você salvou
        tipo: "Landing Page"
    },
    // Adicione mais projetos aqui no futuro...
];

let projetoSelecionado = null;

// --- 3. INICIALIZAÇÃO ---
function carregarPortfolio() {
    const grid = document.getElementById('grid-projetos');
    grid.innerHTML = ''; // Limpa o grid antes de carregar

    portfolio.forEach(item => {
        grid.innerHTML += `
            <div class="card">
                <img src="${item.img}" alt="${item.nome}">
                <div class="card-info">
                    <h3>${item.nome}</h3>
                    <p class="desc">${item.desc}</p>
                    <div class="card-footer">
                        <button class="btn-add" onclick="abrirModalComProjeto('${item.tipo}')">
                            Solicitar Orçamento
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

// --- 4. FUNÇÕES DO MODAL DE CONTATO ---

// Abre/Fecha o modal
function toggleContatoModal() {
    const modal = document.getElementById('modal-contato');
    const isVisible = modal.style.display === 'flex';
    modal.style.display = isVisible ? 'none' : 'flex';

    // Reseta a seleção ao abrir/fechar
    if (!isVisible) {
        resetarSelecao();
    }
}

// Abre o modal já com um tipo de projeto selecionado (vindo do card)
function abrirModalComProjeto(tipoProjeto) {
    toggleContatoModal();
    selecionarProjeto(tipoProjeto);
}

// Seleciona um tipo de projeto no modal
function selecionarProjeto(tipo) {
    projetoSelecionado = tipo;

    // Atualiza visual dos botões
    const botoes = document.querySelectorAll('.btn-opcao');
    botoes.forEach(btn => {
        if (btn.innerText === tipo) {
            btn.classList.add('selecionado');
        } else {
            btn.classList.remove('selecionado');
        }
    });

    // Mostra o projeto selecionado e habilita o botão de envio
    document.getElementById('projeto-selecionado').style.display = 'block';
    document.getElementById('nome-projeto').innerText = tipo;
    document.getElementById('btn-enviar-orcamento').disabled = false;
}

// Reseta a seleção do modal
function resetarSelecao() {
    projetoSelecionado = null;
    const botoes = document.querySelectorAll('.btn-opcao');
    botoes.forEach(btn => btn.classList.remove('selecionado'));
    document.getElementById('projeto-selecionado').style.display = 'none';
    document.getElementById('btn-enviar-orcamento').disabled = true;
}

// --- 5. ENVIAR PARA O ZAP (ORÇAMENTO) ---
function enviarOrcamentoZap() {
    if (!projetoSelecionado) return alert("Por favor, selecione um tipo de projeto.");

    const mensagem = `*Olá, Michell!* 👋%0A%0AGostaria de solicitar um orçamento para um projeto de: *${projetoSelecionado}*.%0A%0APodemos conversar sobre os detalhes?`;

    window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${mensagem}`, '_blank');

    // Fecha o modal após enviar
    toggleContatoModal();
}

// --- 6. ZAP DO FOOTER ---
function abrirZapFooter() {
    const mensagem = "*Olá, Michell!* Vim pelo site e gostaria de saber mais sobre seus serviços.";
    window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${mensagem}`, '_blank');
}

// Inicia o site carregando o portfólio
document.addEventListener('DOMContentLoaded', carregarPortfolio);