var
gulp     = require('gulp'),
sass     = require('gulp-sass'), // sassのコンパイル
bourbon  = require('node-bourbon'), // sassのbourbonを使う
bitters  = require('bourbon-bitters'), // bourbonのbasecss
pleeease = require('gulp-pleeease'), // cssのベンダープレフィックスの自動追加など
plumber  = require('gulp-plumber'); // タスク中のエラーでwatchを止めない


/**
 * sass
 */
gulp.task('sass', function() {
    // コンパイル元
    gulp.src('./src/scss/**/*.scss')

    // エラーでwatchを止めない
    .pipe(plumber({
        errorHandler: function(err) {
            console.log(err.messageFormatted);
            return this.emit('end');
        }
    }))

    // コンパイル
    .pipe(sass({
        includePaths: [
            bourbon.includePaths,
            bitters.includePaths
        ],
        outputStyle : 'expanded'
    }))

    // コンパイル後のcssにベンダープレフィックスをつけたり、ミニファイしたりする
    .pipe(pleeease({
        // ベンダープレフィックスを追加する境界を設定
        autoprefixer: {
            browsers: [
                'last 2 versions', // 主要ブラウザは最新のバージョンから２つ前まで
                'ie >= 10', // IEは10以上
                'iOS >= 8', // iOSは8以上
                'Android >= 4.2', // Androidは4.2以上
            ]
        },
        rem         : {rootValue: '10px'},
        out         : 'main.min.css', // 出力のファイル名を決められる
        minifier    : false, // ミニファイフラグ
    }))

    // コンパイル先
    .pipe(gulp.dest('./public/css/'));
});


/**
 * watch
 */
gulp.task('watch', function() {
    gulp.watch('./src/scss/**/*.scss', ['sass']);
});
