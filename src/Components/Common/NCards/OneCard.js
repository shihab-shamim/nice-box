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
                <hr />
                {options?.isDescription && (
                  <p className="nbhs-card-text">{card.description}</p>
                )}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                preserveAspectRatio="none"
              >
                <path
                  fill="#ffffff"
                  fillOpacity="1"
                  d={options?.[card.wavePath]}
                ></path>
              </svg>
              {options?.isIcon && (
                <a
                  target={options?.openInNewTab ? "_blank" : "_self"}
                  href={card.link}
                  rel="noopener noreferrer"
                >
                  <svg
                    className="nbhs-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    width="1em"
                    height="1em"
                  >
                    <path
                      fill="currentColor"
                      d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.8 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                    />

                    <circle cx="288" cy="220" r="18" fill="white" />

                    <circle cx="255" cy="275" r="22" fill="white" />
                    <circle cx="321" cy="275" r="22" fill="white" />
                  </svg>
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
