import {
  mobileBreakpoint,
  tabBreakpoint,
} from "../../../../bpl-tools/utils/data";

const Style = ({ attributes, id }) => {
  const { options = {}, styles = {} } = attributes;

  const mainSl = `#${id}`;
  const containerSl = `${mainSl} .nbhs-container`;
  const rowSl = `${containerSl} .nbhs-row`;
  const cardSl = `${rowSl} .nbhs-card`;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
		${rowSl}{
		grid-template-columns: repeat(${styles?.columns?.desktop || 3}, 1fr);
		column-gap: ${styles?.columnGap}px;
		row-gap: ${styles?.rowGap}px;
		}

		${cardSl} {
		cursor: ${!options?.isIcon && options?.clickOnCard ? "pointer" : "default"};

		}

		${tabBreakpoint}{
		${rowSl}{
		grid-template-columns: repeat(${styles?.columns?.tablet || 2}, 1fr);
		}
		}

		${mobileBreakpoint}{
		${rowSl}{
		grid-template-columns: repeat(${styles?.columns?.mobile || 1}, 1fr);
		}
		}



	`,
      }}
    />
  );
};
export default Style;
