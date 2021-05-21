export const thousand = val => (
  val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') : '0'
);
