const OneCard = ({ attributes, setAttributes }) => {
  console.log(attributes?.cards);
  const { cards = {}, options = {} } = attributes || {};

  const handleNavigateLink = (url) => {
    if (url) {
      window.open(url, options?.openInNewTab ? "_blank" : "_self");
    }
  };
  // Narcisse, Lycoris, এবং Tulipe
  return (
    <div className="nbhs-container">
      <div className="nbhs-row">
        {cards.map((card, index) => (
          <div
            onClick={() => {
              if (!options.isIcon && options?.clickOnCard) {
                handleNavigateLink(card.link);
              }
            }}
            className="nbhs-col"
            key={index}
          >
            <div className="nbhs-card nbhs-box-shadow">
              <img
                src={card.image}
                className="nbhs-card-img"
                alt={card.title}
              />
              <div className="nbhs-card-body">
                {options?.isTitle && (
                  <h5 className="nbhs-card-title">{card.title}</h5>
                )}
                {options?.isDivider && <hr className="nbhs-card-divider" />}
                {options?.isDescription && (
                  <p className="nbhs-card-text">{card.description}</p>
                )}
              </div>
              <svg
                className="nbhs-card-wave-shape"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
              >
                <path fillOpacity="1" d={options?.[card.wavePath]}></path>
              </svg>
              {options?.isIcon && (
                <a
                  target={options?.openInNewTab ? "_blank" : "_self"}
                  href={card.link}
                  rel="noopener noreferrer"
                >
                  <span
                    className="nbhs-icon"
                    dangerouslySetInnerHTML={{ __html: options?.icon }}
                  ></span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OneCard;
