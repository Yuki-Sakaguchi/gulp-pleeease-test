# cssのベンダープレフィックスは「Autoprefixer」で追加する
sass(bourbonも利用)で書いたcssにAutoprefixerを使ってベンダープレフィックスをつける。


## Autoprefixerとは
cssにベンダープレフィックスを自動でつけるツール


## 参考
* http://kojika17.com/2014/01/autoprefixer.html
* http://parashuto.com/rriver/tools/using-custom-data-for-autoprefixer
* http://koltatt.net/web_design/gulp_pleeease/

## シェアの確認
http://smatabinfo.jp/os/android/index.html


## gulp-pleeeaseが便利
Autoprefixerだけでなく、ミニファイやらなんやらいろいろできるらしいのでこれを使った。めちゃくちゃ便利。

http://phiary.me/gulp-pleeease/

* CSS の事前処理
* ベンダープレフィックスの付与( Autoprefixer )
* rem をピクセルに変換した値も指定. rem をサポートしていないブラウザでも安心♪
* IE8 のための opacity filter を追加
* CSS フィルタを SVG 等価のものに変換
* メディアクエリの整理( pack )
* minify
* sourcemap の出力


## やってみて思ったメリット
* とにかくめちゃくちゃ便利。とにかく書くのが楽。gulpで対応するブラウザを決めておくので、こちらで「あれ、このプロパティはプレフィックスいるのか？」と悩むことはなくなった。
* compassのインクルードを使わなくて済むので楽。（ミスが減る）
* 対応したい機種を変えたい時には設定を変えてコンパイルし直すだけで良いので簡単。


## やってみて思ったデメリット
* compassなどと違い、gulp前提なのでgulpが使えないと厳しい（自分だけなら良いが、複数人で管理する場合にはきちんと共有しないといけない）
* gulpのプラグインに依存しているのでバージョンアップなどして動かなくなったり、不具合があればもろに影響が出る。
* もし開発が止まっちゃったらどうしよう...（他のツールも同じか)


## 結果
めちゃくちゃ便利なのでお勧めしたい！！！！！！


## デモページ
https://yuki-sakaguchi.github.io/gulp-pleeease-test/public/
