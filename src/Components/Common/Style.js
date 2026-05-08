import {
  mobileBreakpoint,
  tabBreakpoint,
} from "../../../../bpl-tools/utils/data";
import {
  getBoxCSS,
  getBackgroundCSS,
  getTypoCSS,
} from "../../../../bpl-tools/utils/getCSS";

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

		${containerSl}{
		${getBackgroundCSS(styles?.bg)}
		padding:${getBoxCSS(styles?.padding?.desktop)};
		margin:${getBoxCSS(styles?.margin?.desktop)};
		border-radius:${getBoxCSS(styles?.radius)};
		}
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
		${containerSl}{
		
		padding:${getBoxCSS(styles?.padding?.tablet)};
		margin:${getBoxCSS(styles?.margin?.tablet)};
		
		}

		}

		${mobileBreakpoint}{
		${rowSl}{
		grid-template-columns: repeat(${styles?.columns?.mobile || 1}, 1fr);
		}
				${containerSl}{
		
		padding:${getBoxCSS(styles?.padding?.mobile)};
		margin:${getBoxCSS(styles?.margin?.mobile)};
		
		}

		}



	`,
      }}
    />
  );
};
export default Style;
