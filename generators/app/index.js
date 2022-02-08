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
        const tpl = this.templatePath('index.html');
        const output = this.destinationPath('index.html');
        const context = this.answers;
        this.fs.copyTpl(tpl, output, context);
    }
}