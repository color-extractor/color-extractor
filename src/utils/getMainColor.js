import colorConvert from "color-convert";

import kmeansClustering from "../utils/kmeansClustering";

const getMainColor = (rgbArray) => {
  const clusters = kmeansClustering(rgbArray, 5, 1);

  const objectClusters = clusters.map((cluster) => ({
    color: cluster[0],
    length: cluster[1].length,
  }));

  const sortedObjectCluster = objectClusters.sort(
    (a, b) => b.length - a.length
  );

  const hexColorArray = sortedObjectCluster.map((cluster) => ({
    hex: rgbToHex(cluster.color),
    size: cluster.length,
  }));

  return hexColorArray;
};

export const rgbToHex = (rgb) => {
  if (!Array.isArray(rgb) || rgb.length < 3) {
    throw "#000000";
  }
  const hex = `#${colorConvert.rgb.hex(rgb)}`;

  return hex;
};

export default getMainColor;
