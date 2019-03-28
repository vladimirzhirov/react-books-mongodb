const cloudinary = require("cloudinary");
const appConfig = require("./config.json");
const lodash = require("lodash");

cloudinary.config({
  cloud_name: appConfig.cloud.cloud_name,
  api_key: appConfig.cloud.api_key,
  api_secret: appConfig.cloud.api_secret
});

const upload = filename => {
  return new Promise((resolve, reject) => {
    if (lodash.isEmpty(filename)) {
      resolve(null);
    }
    const filePath = `${__dirname}${appConfig.uploadDir}${filename}`;
    cloudinary.v2.uploader.upload(
      filePath,
      {
        public_id: `${appConfig.cloud.dir}/${filename}`,
        tags: appConfig.cloud.dir
      },
      (error, result) => {
        if (error) {
          reject({
            message: `Error at upload file to cloudinary: ${error.message}`
          });
        } else {
          resolve(result);
        }
      }
    );
  });
};

module.exports = {
  upload
};
