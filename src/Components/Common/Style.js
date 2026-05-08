const Style = ({ attributes, id }) => {
  const { options = {} } = attributes;

  const mainSl = `#${id}`;
  const cardsl = `${mainSl} .nbhs-row`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
		${cardsl} {
		cursor: ${options?.clickOnCard ? "pointer" : "default"};
		
		}



	`,
      }}
    />
  );
};
export default Style;
