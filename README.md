# Lista de Tarefas Interativa 📝

Uma aplicação web moderna e funcional desenvolvida em JavaScript puro para gerir tarefas do dia a dia, com suporte para adição dinâmica e marcação de conclusão interativa.

## 🎯 Objetivo do Projeto

Evoluir as competências de manipulação avançada do DOM (Document Object Model) em JavaScript, focando na criação dinâmica de múltiplos elementos, gestão de eventos individuais, alteração de estados visuais (`classList.toggle`) e validação de formulários.

## 🛠 Tecnologias e Conceitos Aplicados

- **HTML5:** Estruturação semântica de formulários e contentores de lista (`<input>`, `<button>`, `<ul>`).
- **CSS3:**
  - Layout flexível com Flexbox.
  - Design moderno com paleta escura (Dark Mode).
  - Botões circulares personalizados e uso de pseudoelementos (`::after`) para injeção dinâmica de ícones (`✓`).
  - Classes de estado (`.completed`) para efeitos de texto riscado e opacidade.
- **JavaScript (ES6):**
  - Seleção de nós com `document.querySelector`.
  - Criação de elementos do zero com `document.createElement`.
  - Aninhamento hierárquico com `appendChild`.
  - Captura de valores de texto (`input.value`).
  - Interação baseada em eventos de clique (`addEventListener`) e manipulação de classes com `.classList.toggle()`.
  - Gestão de foco automático (`input.focus()`).

## ✨ Funcionalidades

1. **Adicionar Tarefas:** Escreve no campo de texto e clica em "Adicionar" (ou valida se o campo está vazio para evitar tarefas em branco).
2. **Marcar como Concluída:** Clica no botão circular ao lado de cada tarefa para alternar o estado de conclusão (o botão preenche-se com um visto, o texto é riscado e o fundo ajusta-se automaticamente).
3. **Fluxo Otimizado:** O campo de texto limpa-se automaticamente e recupera o foco após cada inserção para uma digitação fluida.

## 🚀 Como Executar

1. Clone o repositório para a sua máquina local:
   ```bash
   git clone git@github.com:GabrielHPanastacio/lista-de-tarefas.git
   ```
