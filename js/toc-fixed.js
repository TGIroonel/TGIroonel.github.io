const injectPostTitleToSide = () => {
  const $tocCard = document.querySelector('#aside-content #card-toc');
  const $postTitle = document.querySelector('h1.post-title');
  
  // 只有在文章页且存在目录卡片时执行
  if ($tocCard && $postTitle) {
    // 检查是否已经注入过，防止 PJAX 重复注入
    if (document.querySelector('.sidebar-post-title')) return;
    
    const titleText = $postTitle.innerText;
    const titleElement = document.createElement('div');
    titleElement.className = 'sidebar-post-title';
    titleElement.innerText = titleText;
    
    // 插入到“目录”标题的前面
    const $headline = $tocCard.querySelector('.item-headline');
    $tocCard.insertBefore(titleElement, $headline);
  }
};

// 初始化执行
injectPostTitleToSide();
// 兼容 PJAX 跳转
document.addEventListener('pjax:complete', injectPostTitleToSide);