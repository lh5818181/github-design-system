// Adiciona as extensões de matchers do Jest-DOM (ex: toHaveBeenCalledWith, toBeInTheDocument)
import '@testing-library/jest-dom'; 

// Mock para o window.matchMedia (essencial para evitar erros em componentes que usam media queries)
window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};