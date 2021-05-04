/**
 * Adapted from https://wiki.aleen42.com/Programming/JavaScript/webgl/canvas/animate_drawing_of_svg_path/animate_drawing_of_svg_path.html
 */
const distancePerPoint = 100;
const drawFPS = 60;

export const drawPath = (orig: SVGPathElement): Promise<void> =>
  new Promise((res, rej) => {
    let length = 0;
    let timer = 0;

    function startDrawingPath() {
      length = 0;
      orig.style.stroke = '#000';
      timer = setInterval(increaseLength, 1000 / drawFPS);
    }

    function increaseLength() {
      var pathLength = orig.getTotalLength();
      length += distancePerPoint;
      orig.style.strokeDasharray = [length, pathLength].join(' ');

      if (length >= pathLength) {
        clearInterval(timer);
        orig.style.fill = '#000';
        res();
      }
    }

    function stopDrawingPath() {
      clearInterval(timer);
      orig.style.stroke = '';
      orig.style.strokeDasharray = '';
      rej();
    }

    startDrawingPath();
  });

export const drawSVG = (svg: SVGSVGElement): Promise<void> => {
  let lastPromise = Promise.resolve();
  for (let i = 0; i < svg.children.length; i++) {
    const elem = svg.children.item(i) as SVGPathElement;
    lastPromise = lastPromise.then(() => drawPath(elem));
  }
  return lastPromise;
};
