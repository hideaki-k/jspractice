// スライダーに表示する画像のパス
var imgList = [
	"images/img01.jpg",
	"images/img02.jpg",
	"images/img03.jpg",
	"images/img04.jpg"
]

// 画像とナビの要素を自動で追加
for (var i=0; i<imgList.length;i++){
	// li要素を取得
	var slide = document.createElement("li");
	// li要素の中に画像タグを埋め込む
	slide.innerHTML = "<img src='" + imgList[i] + "'>";
	// li要素をクラス名「slider-inner」の子要素として追加
	document.getElementsByClassName("slider-inner")[0].appendChild(slide);

	// li要素を取得
	var nav = document.createElement("li");
	// プロパティ「data-nav-index」に数値を割り振る
	nav.setAttribute("data-nav-index",i);
	// li要素をクラス名「nav」の子要素として追加
	document.getElementsByClassName("nav")[0].appendChild(nav);
}


// スライドの数を取得(処理のために-1する
var length = imgList.length - 1;
// クラス名「imageSlide」に画像の1枚の要素を格納
	var imageSlide = document.getElementsByClassName("slider-inner")[0].getElementsByTagName("li");
// クラス名「dotNavigation」にドットナビの1つの要素を格納
	var dotNavigation = document.getElementsByClassName("nav")[0].getElementsByTagName("li");
// 「現在○○枚目のスライドを表示している」というインデックス番号を格納する変数
	var nowIndex = 0;
// 現在表示されている画像とドットナビにクラス名を付ける
	imageSlide[nowIndex].classList.add("show");
	dotNavigation[nowIndex].classList.add("current")
// スライドがアニメーション中か判断するフラグ
	var isChanging = false;
// スライドのsetTimeoutを管理するタイマー
	var slideTimer;
// スライド切り替え時に呼び出す関数
	function sliderSlide(val){
		if (isChanging === true){
			return false;
		}
		isChanging = true;
		// 現在表示している画像とナビからクラス名を削除
		imageSlide[nowIndex].classList.remove("show");
		dotNavigation[nowIndex].classList.remove("current");
		nowIndex = val;
		// 次に表示する画像とナビにクラスを付与
		imageSlide[nowIndex].classList.add("show");
		dotNavigation[nowIndex].classList.add("current");
		//アニメーションが終わるタイミングでisChangingのステータスをfalseに
		slideTimer = SetTimeout(function(){
			isChanging = false;
		}, 600);
	}












// 左矢印のナビをクリックした時のイベント







// 右矢印のナビをクリックした時のイベント







// ドットナビをクリックした時のイベントを作成






