const getPage = async () => Promise.resolve({
  getViewport: () => ({ height: 10, width: 10 }),
  render: () => ({ promise: '' }),
});

export const getDocument = jest.fn(() => ({
  promise: {
    numPages: 1,
    getPage,
  },
}));

export const GlobalWorkerOptions = {
  workerSrc: null,
};
