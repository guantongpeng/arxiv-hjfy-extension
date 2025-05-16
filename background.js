chrome.action.onClicked.addListener(async (tab) => {
  try {
    const arxivRegex = /arxiv\.org\/(pdf|abs)\/(\d+\.\d+)/;
    const match = tab.url.match(arxivRegex);
    
    if (match) {
      const paperId = match[2];
      const newUrl = `https://hjfy.top/arxiv/${paperId}`;
      
      // 获取当前标签页的index并加1
      const newIndex = tab.index + 1;
      
      await chrome.tabs.create({ 
        url: newUrl,
        index: newIndex,
        openerTabId: tab.id  // 可选，关联原标签页
      });
    }
  } catch (error) {
    console.error('Error:', error);
  }
});