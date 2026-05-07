import { useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import OneCard from "../Common/NCards/OneCard";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <OneCard attributes={attributes} setAttributes={setAttributes} />
      </div>
    </>
  );
};
export default Edit;
