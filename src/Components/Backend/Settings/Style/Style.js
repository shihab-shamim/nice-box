import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";

const Style = ({ attributes, setAttributes }) => {
  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Container", "info-cards")}
        initialOpen={false}
      ></PanelBody>
    </>
  );
};

export default Style;
