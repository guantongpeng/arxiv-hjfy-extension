chrome.action.onClicked.addListener(async (tab) => {
  try {
    // 同时匹配 arXiv 和 AlphaXiv 的 URL 模式
    const pattern = /(arxiv|alphaxiv)\.org\/(pdf|abs)\/(\d+\.\d+)/;
    const match = tab.url.match(pattern);
    
    if (match) {
      // 提取论文ID（第三个捕获组）
      const paperId = match[3];
      
      // 构建新URL（根据需求自定义）
      const newUrl = `https://hjfy.top/arxiv/${paperId}`;
      
      // 创建右侧相邻标签页
      await chrome.tabs.create({
        url: newUrl,
        index: tab.index + 1, // 定位到当前标签右侧
        openerTabId: tab.id
      });
    }
  } catch (error) {
    console.error('扩展程序错误:', error);
  }
});
