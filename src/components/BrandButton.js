const BrandButton = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <h1 className="brand hide-sm" onClick={scrollUp}>
      AH
    </h1>
  );
};

export default BrandButton;
