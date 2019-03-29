import React from "react";
import Dropzone from "react-dropzone";
import "./previewContainer.less";
import classNames from "classnames";

const DropZoneField = ({
  handleOnDrop,
  clear,
  input: { onChange },
  image,
  meta: { error, touched }
}) => {
  return (
    <div className="preview-container">
      {image
        ? renderPreview(image, clear)
        : renderFileSelector(handleOnDrop, onChange, touched, error)}
    </div>
  );
};

const renderFileSelector = (handleOnDrop, onChange, touched, error) => {
  const validationClasses = classNames({
    "file-empty": touched && error
  });

  return (
    <Dropzone
      accept="image/jpeg, image/png, image/gif, image/bmp"
      className="upload-container"
      onDrop={file => handleOnDrop(file, onChange)}
      multiple={false}
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
            <span className={validationClasses}>
              {error && touched ? error : null}
            </span>
          </div>
        </section>
      )}
    </Dropzone>
  );
};

const renderPreview = (image, clear) => {
  return (
    <div>
      <div className="row">
        <div className="col-sm">
          <img src={image.url} alt="" width="500px" height="500px" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-sm text-center">
          <button type="button" className="btn btn-danger" onClick={clear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropZoneField;
