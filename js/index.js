
$(document).ready(function(){
	$('#fullpage').fullpage({

		// 是否垂直居中
		verticalCentered:false,
		// 是否显示项目导航
		navigation:true,
		// 设置滚屏的速度
		scrollingSpeed:1500,
		//设置背景颜色
		sectionsColor:["#fadd67","#84a2d4","#ef674d","#fed","#d04759","#84d9ed", "#8ac060"],
		// 当进入到当前屏幕的时候
		afterLoad:function(anchorLink,index){
				// console.log(index);
				 $(".down").fadeIn();
				 $(this).addClass('animate');

				 // 第七屏
				 if(index==7){
				 	$(".screen07 .start img").addClass('animated');
				 	$(".screen07 .text").addClass('animated');
				 }

				 // 第八屏
				 if(index==8){
				 	$(this).on("mousemove",function(e){
				 		$(".hand").css({
				 			"left":e.clientX+20,
				 			"top":e.clientY+20
				 		})
				 		// 设置按钮移入鼠标事件
				 		 $(".screen08 .btns").on("mouseenter",function(){
				 		 	$(".screen08 .btns img:last-child").show();
				 		 }).on("mouseleave",function(){
				 		 	$(".screen08 .btns img:last-child").hide();
				 		 })
				 		 // 设置再来一次
				 		 $(".screen08 .more").on("click",function(){
				 		 	$.fn.fullpage.moveTo(1);
				 		 })
				 	})
				 }
		},
		// 当离开某一屏进入到下一屏的动作
		onLeave:function(index,nextindex,direction){
				// console.log(index,nextindex,direction);
				
				$(".down").fadeOut();
				// 从第二屏到第三屏
					if(index==2&&nextindex==3){
						// 添加动画效果,并监听结束事件
						$(".screen02 .hide").addClass('animated').on("animationend",function(){
						$(".screen03 .size img:last-child").show(); 
						$(".screen03 .btns img:last-child").show();

			}); //从第三屏到第四屏
		}else if(index==3 &&nextindex==4){
			$(".screen03 .hide").addClass('animated').on("animationend",function(){
				$(".screen04 .cart .sofaImg").show();
				$(".screen04 .cart").addClass('animated').on("animationend",function(){
					$(".screen04 .text img:last-child").fadeIn();
					$(".screen04 .address").fadeIn();
					$(".screen04 .address .addressImg").fadeIn();
				});
			});
			$(".screen04 .cloud").addClass('animated')
		}else if (index==4&&nextindex==5){
			$(".screen05 .mouse .handImg").addClass('animated').on("transitionend",function(){
				// 设置鼠标的显示效果																																																																																																																																																																																																																																																																																																																																						```````````````````````````````````````````````````````````````````````````````````````````
				$(".screen05 .mouse .mouse02_img").show();
				// 沙发动画
				$(".screen05 .card .sofaImg").addClass('animated');
				// 设置账单动画
				$(".screen05 .card .orderImg").addClass('animated');
			});
		}else if(index==5 && nextindex==6){
			// 离开第五屏进入第六屏
			// 设置白云的动画
			$(".screen06 .cloud img").addClass('animated');
			// 设置从第五屏到第六屏沙发动画效果
			$(".screen05 .hide_sofa").addClass('animated');
			$(".screen06 .package").addClass('animated');
			// 开始设置背景图片的位置动画
			$(".screen06").addClass('animated');
			// 收货地址动画效果
			$(".screen06 .car .buyerImg").addClass('animated');
			// 快递小哥出现动画
			$(".screen06 .car .workerImg").addClass('animated');
			// 快递员说话动画
			$(".screen06 .car .sayImg").addClass('animated');
			// 文字改变效果
			$(".screen06 .text .textImg").addClass('animated');
			// 开门动画
			$(".screen06 .people .doorImg").addClass('animated');
			// 姑娘开门动画
			$(".screen06 .people .personImg").addClass('animated');
		}
				
			
			
		},
		// 页面结构加载完成后
		afterRender:function(){
			$(".down").on("click",function(){
				$.fn.fullpage.moveSectionDown();
			})
			
		}
	});
});