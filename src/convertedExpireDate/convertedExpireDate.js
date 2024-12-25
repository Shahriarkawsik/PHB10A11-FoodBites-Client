export const convertedExpireDate = (expr) => {
  const date = new Date(expr);
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear(); // Gets year
  return `${day}-${month}-${year}`; // Combines into desired format
};
