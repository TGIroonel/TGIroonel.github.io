// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 查找头像图片元素
    const avatarImg = document.querySelector('.card-info .avatar-img img');
    
    if (avatarImg) {
        // 方法1：直接添加点击事件（推荐）
        avatarImg.style.cursor = 'pointer';
        avatarImg.setAttribute('title', '关于我');
        avatarImg.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = '/about/';
        });
    }
});