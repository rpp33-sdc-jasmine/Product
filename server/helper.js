const stylePhotos = (data) => {
  let results = data.results;
  if (results) {
    results.map((style) => {
      if(style.photos === null) {
        style.photos = [{"thumbnail_url": "", "url": ""}];
      };
      if(style.skus === null) {
        style.skus = {};
      }
    });
  };
  return data;
};

module.exports = {
  stylePhotos:stylePhotos
};