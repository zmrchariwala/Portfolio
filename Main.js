jQuery(document).ready(function(){
    
   $(window).scroll(function(){
      var top_scroll = $(window).scrollTop();
       if(top_scroll>=60){
           $("header").addClass("header2");
       }else if($("header").hasClass("header2")){
           $("header").removeClass("header2");
       }
   }); 
    window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        $(".down").hide();
        $(".up").show();
        
    }
    else{
        $(".up").hide();
        $(".down").show();
    }
    };
    const menubtn = document.querySelector('.menu_btn');
    const mobilemenu = document.querySelector('header');
    const mobilemenu1 = document.querySelector('.mobile');
    
    let menuopen = false;
    menubtn.addEventListener('click',()=>{
        if(!menuopen){
            menubtn.classList.add('open');
            mobilemenu.classList.add('show');
            mobilemenu1.classList.add('show1');
            menuopen = true;
        }
        else{
            menubtn.classList.remove('open');
            mobilemenu.classList.remove('show');
            mobilemenu1.classList.remove('show1');
            menuopen = false;
        }
        
    
    });
 
});

    function click_scroll(){
        var top_scroll = $(window).scrollTop();
        window.scroll({
            top:(top_scroll+500),
            left:0,
            behavior: 'smooth'
        });
    };