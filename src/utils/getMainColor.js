import kmeansClustering from "../utils/kmeansClustering";

const getMainColor = (rgbArray) => {
  const clusters = kmeansClustering(rgbArray, 5, 1);

  const objectClusters = clusters.map((cluster) => ({
    color: cluster[0],
    length: cluster[1].length,
  }));

  const sortedObjectCluster = objectClusters.sort((a, b) => b.size - a.size);

  const hexColorArray = sortedObjectCluster.map((cluster) => ({
    hex: rgbToHex(cluster.color),
    size: cluster.length,
  }));

  return hexColorArray;
};

export const rgbToHex = (rgb) => {
  const th = (i) => {
    const h = Math.round(i).toString(16);
    return h.length === 1 ? "0" + h : h;
  };
  const hex = `#${th(rgb[0])}${th(rgb[1])}${th(rgb[2])}`;

  return hex;
};

export default getMainColor;
