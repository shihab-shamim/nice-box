import { __ } from "@wordpress/i18n";
import { PanelBody, PanelRow } from "@wordpress/components";
import {
  Background,
  BoxControl,
  Device,
  Label,
} from "../../../../../../bpl-tools/Components";

const Style = ({ attributes, setAttributes, device }) => {
  const { styles = {} } = attributes || {};

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Container", "info-cards")}
        initialOpen={false}
      >
        <Background
          label={__("Background", "info-cards")}
          value={styles?.bg}
          onChange={(val) => setAttributes({ styles: { ...styles, bg: val } })}
        />
        <PanelRow>
          <Label>Margin</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={styles?.margin?.[device]}
          onChange={(val) => {
            setAttributes({
              styles: {
                ...styles,
                margin: {
                  ...styles?.margin,
                  [device]: val,
                },
              },
            });
          }}
        />
        <PanelRow>
          <Label>Padding</Label>
          <Device />
        </PanelRow>
        <BoxControl
          values={styles?.padding?.[device]}
          onChange={(val) => {
            setAttributes({
              styles: {
                ...styles,
                padding: {
                  ...styles?.padding,
                  [device]: val,
                },
              },
            });
          }}
        />

        <BoxControl
          className="mt10"
          label={__("Border Radius", "info-cards")}
          values={styles?.radius}
          onChange={(val) => {
            setAttributes({
              styles: {
                ...styles,
                radius: val,
              },
            });
          }}
        />
      </PanelBody>
    </>
  );
};

export default Style;
