# 项目介绍
自己实现的一个基于Yeomen实现的的模拟vue-cli的脚手架

### 构建自己的脚手架工具
#### 如何利用yeomen构建自己的脚手架
如本项目，在/yeoman文件夹下，创建了generator-wangvue，在该npm包中书写脚手架相关业务代码；然后新建了test_generator项目，
在该项目中使用yo wangvue进行测试（注意使用npm link把包link到全局）

#### 如何与命令行交互
可以利用yeomen-generator的钩子函数 prompting 实现, 如下代码
```
prompting() {
    return this.prompt([{
        type: 'input',
        name: 'title',
        masg: 'please input the project name:',
        default: this.appname
    }]).then(ans => {
        console.log(ans);
        this.answers = ans;
    })
}
```