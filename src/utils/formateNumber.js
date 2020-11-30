const formatNumber = (
  num,
  minDecimalDigits = 0,
  maxDecimalDigits = 3,
  style = undefined
) => {
  // console.log('num from formatCurrency', num)
  const realNumber = typeof num === "string" ? parseInt(num, 10) : num;

  if (!realNumber || Number.isNaN(realNumber)) {
    return null;
  }

  const baseProps = {
    minimumFractionDigits: minDecimalDigits,
    maximumFractionDigits: maxDecimalDigits,
  };

  if (style) {
    return style === "currency"
      ? realNumber.toLocaleString("en-US", {
          ...baseProps,
          style,
          currency: "USD",
        })
      : realNumber.toLocaleString("en-US", { ...baseProps, style });
  }

  return realNumber.toLocaleString("en-US", baseProps);
};

export default formatNumber;
