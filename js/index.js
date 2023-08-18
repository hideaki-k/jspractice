// [nice]というidがついた要素をクリックしたときのアクションを設定
document.getElementById("nice").addEventListener("click",function(){
    //pタグ準備
    var element = document.createElement("p");
    //いいねというテキストを準備
    var text = document.createTextNode("いいね");
    //pタグの中に「いいね！」を格納して要素を追加
    document.body.appendChild(element).appendChild(text);
});