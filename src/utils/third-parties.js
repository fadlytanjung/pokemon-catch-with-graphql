export const initScript = (id, src, onload) => {
  const fjs = document.getElementsByTagName('script')[0];
  if (document.getElementById(id)) {
    onload();
    return;
  }
  const js = document.createElement('script');
  js.id = id;
  js.src = src;
  fjs.parentNode.insertBefore(js, fjs);
  js.onload = onload;
};
