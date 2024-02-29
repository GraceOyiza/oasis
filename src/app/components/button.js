

function Buttons({
  text,
  border = " 1px solid transparent",
  bgColor = "#DA241C",
  textColor = "#ffffff",
  borderRadius,
  customName,
}) {
  return (
    <button
      className={`d-flex align-items-center justify-content-center ${customName}`}
      style={{
        backgroundColor: bgColor,
        border,
        color: textColor,
        borderRadius: borderRadius,
      }}
      type="button"
    >
      {text}
    </button>
  );
}

export default Buttons;
