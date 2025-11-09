// Các preset tái sử dụng cho nhiều section

export function fadeUp(anime, target, opts = {}) {
  const {
    duration = 650,
    easing = "easeOutQuad",
    fromY = -30,
    toY = 0,
    fromOpacity = 0,
    toOpacity = 1,
    delay = 0,
  } = opts;

  anime.set(target, { opacity: fromOpacity, translateY: fromY });
  anime({
    targets: target,
    opacity: toOpacity,
    translateY: toY,
    duration,
    easing,
    delay,
  });
}

export function staggerChildren(anime, container, opts = {}) {
  const {
    selector = "> *",           // chọn các child trực tiếp
    fromY = 24,
    duration = 700,
    easing = "easeOutCubic",
    staggerMs = 100,
    fromOpacity = 0,
  } = opts;

  const items = container.querySelectorAll(selector);
  if (!items.length) return;

  anime.set(items, { opacity: fromOpacity, translateY: fromY });
  anime({
    targets: items,
    opacity: 1,
    translateY: 0,
    duration,
    easing,
    delay: anime.stagger(staggerMs),
  });
}

export function zoomIn(anime, target, opts = {}) {
  const {
    fromScale = 0.9,
    toScale = 1,
    fromOpacity = 0,
    toOpacity = 1,
    duration = 600,
    easing = "easeOutQuad",
    delay = 0,
  } = opts;

  anime.set(target, { opacity: fromOpacity, scale: fromScale });
  anime({
    targets: target,
    opacity: toOpacity,
    scale: toScale,
    duration,
    easing,
    delay,
  });
}