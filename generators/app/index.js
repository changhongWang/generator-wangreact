const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    prompting() {
        return this.prompt([{
            type: 'input',
            name: 'title',
            masg: 'Plz input the project name:',
            default: this.appname
        }]).then(ans => {
            console.log(ans);
            this.answers = ans;
        })
    }
    writing() {
        // this.fs.write(
        //     this.destinationPath('temp.txt'),
        //     'First Time using Yeomen generator'
        // )

        // 利用模版生成
        // const tpl = this.templatePath('index.html');
        // const output = this.destinationPath('index.html');
        // const context = this.answers;
        // this.fs.copyTpl(tpl, output, context);

        // React模版列表
        const templates = [
            'public/favicon.ico',
            'public/index.html',
            'public/logo192.png',
            'public/logo512.png',
            'public/manifest.json',
            'public/robots.txt',
            'src/App.css',
            'src/App.js',
            'src/App.test.js',
            'src/index.css',
            'src/index.js',
            'src/logo.svg',
            'src/reportWebVitals.js',
            'src/setupTests.js',
            '.gitignore',
            'package-lock.json',
            'package.json',
            'README.md'
        ];

        // forEach遍历列表 复制
        templates.forEach(tpl => {
            this.fs.copyTpl(
                this.templatePath(tpl),
                this.destinationPath(tpl),
                this.answers
            )
        })
    }
}