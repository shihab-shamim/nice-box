import { __ } from "@wordpress/i18n";

import { PanelBody } from "@wordpress/components";

const General = ({ attributes, setAttributes }) => {
  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Add Or Remove Cards", "info-cards")}
        initialOpen={false}
      ></PanelBody>
    </>
  );
};

export default General;
