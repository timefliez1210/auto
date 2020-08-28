export const loadTronWeb = async () => {
  const loadWatcher = setInterval(() => {
    if (window.tronWeb && window.tronWeb.ready) {
      this.setState({
        tronWeb: window.tronWeb,
      });

      clearInterval(loadWatcher);
    }
  }, 500);
};
