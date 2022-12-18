export function updateScrollPosition() {
  const hash = window.location.hash;
  // console.log({ hash });
  if (hash) {
    const element = document.querySelector(hash);
    // console.log({ element });
    if (element) {
      setTimeout(() => element.scrollIntoView(), 700)
    }
  }
}
