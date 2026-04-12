document.addEventListener('DOMContentLoaded', initSocialAlerts);
document.addEventListener('pjax:complete', initSocialAlerts);

function initSocialAlerts() {
    const blogLinks = document.querySelectorAll('.social-icon[href="javascript:void(0)"]');
    
    blogLinks.forEach(link => {
        // 移除可能重复的事件监听
        link.removeEventListener('click', handleBlogClick);
        // 添加点击事件
        link.addEventListener('click', handleBlogClick);
    });
}

function handleBlogClick(e) {
    e.preventDefault();
    e.stopPropagation();
    
    swal({
            title: '确认前往TGIroonel的Blog？',
            type: 'info',
            showCancelButton: 'true',
            confirmButtonText: '去',
            cancelButtonText: '不去',
        }, function (isConfirm) {
            if (isConfirm) {
                setTimeout(function () {
                    swal({
                        title: '神奇的是，你已经在那了',
                    })
                }, 200)

            }else
                setTimeout(function () {
                    swal({
                        title: '你是对的，因为这里就是',
                        type: 'success',
                    })
                }, 200)
        })
    
    return false;
}