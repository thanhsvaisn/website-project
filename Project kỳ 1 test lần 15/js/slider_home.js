    
    document.addEventListener('DOMContentLoaded',function(){
        var stopRunningbtns = document.querySelectorAll('#slider-home [data-bs-target]');
        var hideShowVideos = document.querySelectorAll('.show-video');
        var btnShowVideos = document.querySelectorAll('.btn-play');
        var bgSliderS = document.querySelectorAll('.bg-black-slider');
        var btnCloseVideoS = document.querySelectorAll('.icon-close-video');
        var stopTimes = document.querySelectorAll('.btn-slider-carousel [data-bs-interval]');
        var btnStart = document.querySelector('.btn-start');
        var btnPause = document.querySelector('.btn-pause');
        
        btnShowVideos.forEach(function(btnShowVideo,index){
        var hideShowVideo = hideShowVideos[index];
        var btnShowVideo = btnShowVideos[index];
        var bgSlider = bgSliderS[index];
        var btnStar = btnStart[index];
        var btnCloseVideo = btnCloseVideoS[index];
        // tạm dừng việc hoán đổi ảnh
        function pause(){
            btnPause.addEventListener('click', function () {
            btnStart.style.display = 'block';
            btnPause.style.display = 'none';
            stopTimes.forEach(function (stopTime) {
                stopTime.setAttribute('data-bs-interval', 'false'); 
            });
        });
        };
        pause();
    
        function start(){
            btnStart.addEventListener('click', function () {
            btnStart.style.display = 'none';
            btnPause.style.display = 'block';
            stopTimes.forEach(function (stopTime) {
                stopTime.setAttribute('data-bs-interval', '20000'); 
            });
        });
        }
        start();
        
        // khi click vào video các btn sẽ bị vô hiệu hóa//
        function closeVideo(){
            btnCloseVideo.addEventListener('click',function(){
                hideShowVideo.style.display = 'none';
                bgSlider.style.background = 'transparent';
                bgSlider.style.opacity = '1';
                stopTimes.forEach(function (stopTime) {
                    stopTime.setAttribute('data-bs-interval', '20000'); 
                });
                stopRunningbtns.forEach(function(stopRunningbtn){
                    stopRunningbtn.setAttribute('data-bs-target','#slider-home');
                });
                
            });
            };
        closeVideo();
        btnShowVideo.addEventListener('click',function(){
        if (hideShowVideo.style.display === 'none' || hideShowVideo.style.display === '') {
            hideShowVideo.style.display = 'block';
            bgSlider.style.background = '#000';
            bgSlider.style.opacity = '.8';
            stopTimes.forEach(function (stopTime) {
                stopTime.setAttribute('data-bs-interval', 'false'); 
            });
            stopRunningbtns.forEach(function(stopRunningbtn){
                stopRunningbtn.setAttribute('data-bs-target','false');
            });
        }
    });
        });
            });