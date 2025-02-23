const kmeansClustering = (points, k, min_diff) => {
  let plen = points.length;
  let clusters = [];
  let seen = [];

  while (clusters.length < k) {
    let idx = Math.floor(Math.random() * plen);
    let found = false;
    for (let i = 0; i < seen.length; i++) {
      if (idx === seen[i]) {
        found = true;
        break;
      }
    }
    if (!found) {
      seen.push(idx);
      clusters.push([points[idx], [points[idx]]]);
    }
  }

  while (true) {
    let plists = [];

    for (let i = 0; i < k; i++) {
      plists.push([]);
    }

    for (let j = 0; j < plen; j++) {
      let p = points[j];
      let smallest_distance = 10000000;
      let idx = 0;

      for (let i = 0; i < k; i++) {
        let distance = euclidean(p, clusters[i][0]);
        if (distance < smallest_distance) {
          smallest_distance = distance;
          idx = i;
        }
      }
      plists[idx].push(p);
    }

    let diff = 0;
    for (let i = 0; i < k; i++) {
      let old = clusters[i];
      let center = calculateCenter(plists[i], 3);
      let new_cluster = [center, plists[i]];
      let dist = euclidean(old[0], center);
      clusters[i] = new_cluster;
      diff = diff > dist ? diff : dist;
    }
    if (diff < min_diff) {
      break;
    }
  }
  return clusters;
};

const euclidean = (p1, p2) => {
  let s = 0;
  const length = p1.length;
  for (let i = 0; i < length; i++) {
    s += (p1[i] - p2[i]) * (p1[i] - p2[i]);
  }

  return s ** 0.5;
};

const calculateCenter = (points, n) => {
  let vals = new Array(n).fill(0);
  let plen = points.length;

  if (plen === 0) {
    return [128, 128, 128];
  }

  for (let i = 0; i < plen; i++) {
    for (let j = 0; j < n; j++) {
      vals[j] += points[i][j];
    }
  }

  for (let i = 0; i < n; i++) {
    vals[i] = plen === 0 ? 128 : vals[i] / plen;
  }

  const fixedVals = vals.map((v, index) =>
    isNaN(v) ? points[0][index] : Math.round(v)
  );

  return fixedVals;
};

export default kmeansClustering;
