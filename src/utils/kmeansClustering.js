const kmeansClustering = (rgbDataArray, k, min_diff) => {
  const totalRgbDataArrayCount = rgbDataArray.length;
  const clusterGroups = [];
  const selectedInitialIndex = [];

  while (clusterGroups.length < k) {
    const randomArrayIndex = Math.floor(Math.random() * totalRgbDataArrayCount);
    let found = false;
    for (let i = 0; i < selectedInitialIndex.length; i++) {
      if (randomArrayIndex === selectedInitialIndex[i]) {
        found = true;
        break;
      }
    }
    if (!found) {
      selectedInitialIndex.push(randomArrayIndex);
      clusterGroups.push([
        rgbDataArray[randomArrayIndex],
        [rgbDataArray[randomArrayIndex]],
      ]);
    }
  }

  while (true) {
    const clusteredRgbGroups = [];

    for (let i = 0; i < k; i++) {
      clusteredRgbGroups.push([]);
    }

    for (let j = 0; j < totalRgbDataArrayCount; j++) {
      const currentRgbData = rgbDataArray[j];
      let smallest_distance = 10000000;
      let nearestClusterIndex = 0;

      for (let i = 0; i < k; i++) {
        let distance = euclidean(currentRgbData, clusterGroups[i][0]);
        if (distance < smallest_distance) {
          smallest_distance = distance;
          nearestClusterIndex = i;
        }
      }
      clusteredRgbGroups[nearestClusterIndex].push(currentRgbData);
    }

    let diff = 0;
    for (let i = 0; i < k; i++) {
      const previousCluster = clusterGroups[i];
      const newClusterCenter = calculateCenter(clusteredRgbGroups[i], 3);
      const updatedClusterData = [newClusterCenter, clusteredRgbGroups[i]];
      const distanceBetweenCenters = euclidean(
        previousCluster[0],
        newClusterCenter
      );
      clusterGroups[i] = updatedClusterData;
      diff = diff > distanceBetweenCenters ? diff : distanceBetweenCenters;
    }
    if (diff < min_diff) {
      break;
    }
  }
  return clusterGroups;
};

const euclidean = (p1, p2) => {
  let sum = 0;
  const length = p1.length;
  for (let i = 0; i < length; i++) {
    sum += (p1[i] - p2[i]) * (p1[i] - p2[i]);
  }
  return sum ** 0.5;
};

const calculateCenter = (clusteredRgbData, n) => {
  const channelSumRgbData = new Array(n).fill(0);
  const clusteredRgbDataCount = clusteredRgbData.length;

  if (clusteredRgbDataCount === 0) {
    return [128, 128, 128];
  }

  for (let i = 0; i < clusteredRgbDataCount; i++) {
    for (let j = 0; j < n; j++) {
      channelSumRgbData[j] += clusteredRgbData[i][j];
    }
  }

  for (let i = 0; i < n; i++) {
    channelSumRgbData[i] =
      clusteredRgbDataCount === 0
        ? 128
        : channelSumRgbData[i] / clusteredRgbDataCount;
  }

  const finalClusterCenter = channelSumRgbData.map((rgbData, index) =>
    isNaN(rgbData) ? clusteredRgbData[0][index] : Math.round(rgbData)
  );

  return finalClusterCenter;
};

export default kmeansClustering;
