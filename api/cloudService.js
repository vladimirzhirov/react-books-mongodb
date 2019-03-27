const cloudinary = require("cloudinary");

const config = cloudinary.config({
  cloud_name: "dnfqlg80a",
  api_key: "794449194213135",
  api_secret: "dcfpQguRYCbUmmWx6oZw_12244Q"
});

const upload = filename => {
  const uniqueFilename = filename + " " + new Date().toISOString();
  const filePath = `${__dirname}/public/uploads/${filename}`;
  const cloudBaseUrl = `https://res.cloudinary.com/${config.cloud_name}`;
  const cloudSecUrl = `/image/upload/v1553593564/books/${uniqueFilename}`;

  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(
      filePath,
      { public_id: `books/${uniqueFilename}`, tags: `books` },
      function(error, result) {
        if (error) {
          reject(error);
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
