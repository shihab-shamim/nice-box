import { __ } from "@wordpress/i18n";

import { PanelBody, ToggleControl } from "@wordpress/components";
import { ItemsPanel } from "../../../../../../bpl-tools/Components";
import OneSetting from "../../../Common/NCards/OneSetting";

const General = ({ attributes, setAttributes }) => {
  const { options = {} } = attributes || {};
  const newOneCard = {
    title: "Title",
    description: "Description",
    image: "https://www.jellypir.at/CODEPEN/picture/autre/jellyfish_15.jpg",
    wavePath: "narcisse",
    link: "#",
  };
  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Add Or Remove Cards", "info-cards")}
        initialOpen={false}
      >
        <ItemsPanel
          newItem={newOneCard}
          design="sortable"
          attributes={attributes}
          setAttributes={setAttributes}
          arrKey="cards"
          itemLabel="Card"
          ItemSettings={OneSetting}
          // premiumProps={premiumProps}
        />
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Options", "info-cards")}
        initialOpen={false}
      >
        <ToggleControl
          className="mt10"
          label={__("Show Title", "info-cards")}
          checked={options?.isTitle}
          onChange={(val) =>
            setAttributes({ options: { ...options, isTitle: val } })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Description", "info-cards")}
          checked={options?.isDescription}
          onChange={(val) =>
            setAttributes({ options: { ...options, isDescription: val } })
          }
        />
        <ToggleControl
          className="mt10"
          label={__("Show Icon", "info-cards")}
          checked={options?.isIcon}
          onChange={(val) =>
            setAttributes({ options: { ...options, isIcon: val } })
          }
        />
        {!options?.isIcon && (
          <ToggleControl
            className="mt10"
            label={__("Click On Card", "info-cards")}
            checked={options?.clickOnCard}
            onChange={(val) =>
              setAttributes({ options: { ...options, clickOnCard: val } })
            }
          />
        )}

        <ToggleControl
          className="mt10"
          label={__("Open in New Tab", "info-cards")}
          checked={options?.openInNewTab}
          onChange={(val) =>
            setAttributes({ options: { ...options, openInNewTab: val } })
          }
        />
      </PanelBody>
    </>
  );
};

export default General;
