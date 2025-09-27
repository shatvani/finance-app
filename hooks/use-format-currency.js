import { useMemo } from "react";

export const useFormatCurrency = (amount) => {
  const formatCurrency = (amount) => 
    new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' }).format(amount);

  return useMemo(() => formatCurrency(amount), [amount]);
}