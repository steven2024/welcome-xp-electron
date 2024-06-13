function requestShutdown() {
  window.electronAPI.requestShutdown();
}

document.getElementById('shutdown-options').addEventListener('click', requestShutdown);
