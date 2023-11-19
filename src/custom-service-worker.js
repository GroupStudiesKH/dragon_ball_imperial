self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'backgroundSyncProgress') {
      // 傳遞進度資訊到主網頁
      self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
          client.postMessage({
            type: 'syncProgress',
            progress: event.data.progress,
          });
        });
      });
    }
  });