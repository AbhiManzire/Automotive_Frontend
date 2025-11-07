// ExternalCatalogService removed — stubbed to avoid errors if imported elsewhere
export const useExternalCatalog = () => {
  return {
    handleExternalCatalogPurchase: () => {},
    checkAndHandlePendingPurchase: () => false
  };
};

const ExternalCatalogService = {};
export default ExternalCatalogService;