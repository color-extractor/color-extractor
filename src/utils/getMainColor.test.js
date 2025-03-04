import { describe, expect, it } from "vitest";

import { getMainColor } from "./getMainColor";

describe("getMainColor function", () => {
  it("빈 배열이 입력되면 null값을 return 해야 한다.", () => {
    expect(getMainColor([])).toBe(null);
  });

  it("한 가지 색상만 있을 때는 한 색상만 return 해야 한다", () => {
    expect(getMainColor([[0, 0, 0]])).toBe([0, 0, 0]);
  });

  it("가장 많은 색상 데이터를 가진 색상이 배열 첫번째 요소여야 한다.", () => {
    expect(
      getMainColor([
        [0, 0, 0],
        [0, 128, 0],
        [255, 0, 0],
        [0, 0, 255],
      ])
    ).toBe([0, 0, 0]);
  });
});
